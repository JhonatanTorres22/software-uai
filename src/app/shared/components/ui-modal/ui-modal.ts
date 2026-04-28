import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Injector,
  OnInit,
  signal,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { UiButtonComponent } from '../ui-button/ui-button.component';
import { ModalFooterConfig } from '@/shared/services/modal.service';

@Component({
  selector: 'app-ui-modal',
  imports: [UiButtonComponent],
  templateUrl: './ui-modal.html',
  styleUrl: './ui-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiModal implements OnInit, AfterViewInit {

  footer: ModalFooterConfig = {
    primaryLabel: 'Guardar',
    cancelLabel: 'Cancelar',
    primaryColor: 'primary',
    cancelColor: 'secondary',
    showPrimary: true,
    showCancel: true
  };

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  private ref = inject(DynamicDialogRef);
  private config = inject(DynamicDialogConfig);
  private injector = inject(Injector);

  component: any;
  componentRef: any;

  /* ─── Signals del footer (evitan NG0100) ─── */
  readonly showPrimary  = signal(true);
  readonly showCancel   = signal(true);
  readonly primaryLabel = signal('Guardar');
  readonly cancelLabel  = signal('Cancelar');
  readonly disablePrimary = signal(false);
  readonly disableCancel  = signal(false);

  /* ─────────────────────────────
     INIT
  ───────────────────────────── */
  ngOnInit() {
    this.component = this.config.data?.['component'];

    this.footer = {
      ...this.footer,
      ...(this.config.data?.['footer'] || {})
    };

    /* Valores estáticos: seguros de leer aquí */
    this.showPrimary.set(this.footer.showPrimary ?? true);
    this.showCancel.set(this.footer.showCancel  ?? true);
    this.primaryLabel.set(this.footer.primaryLabel || 'Guardar');
    this.cancelLabel.set(this.footer.cancelLabel   || 'Cancelar');

    this.componentRef = this.container.createComponent(this.component);

    const payload = this.config.data?.['payload'];
    if (payload) {
      Object.assign(this.componentRef.instance, payload);
    }
  }

  /* ─────────────────────────────
     AFTER VIEW
     Aquí el ngOnInit del componente interno ya corrió
     (patchValue incluido) → valores estables.
  ───────────────────────────── */
  ngAfterViewInit() {
    /* Labels dinámicos (el componente puede sobreescribirlos) */
    this.primaryLabel.set(
      this.resolveString(['modalPrimaryLabel'], this.footer.primaryLabel || 'Guardar')
    );
    this.cancelLabel.set(
      this.resolveString(['modalCancelLabel'], this.footer.cancelLabel || 'Cancelar')
    );

    /* Disable inicial */
    this.disablePrimary.set(this.resolveBoolean(['modalPrimaryDisabled'], false));
    this.disableCancel.set(this.resolveBoolean(['modalCancelDisabled'],  false));

    /* Reactividad: actualizaciones en tiempo real */
    this.setupReactiveDisable();

    requestAnimationFrame(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }

  /**
   * Detecta si `modalPrimaryDisabled` es un signal/computed (function)
   * o un getter sobre un ReactiveForm, y suscribe en consecuencia.
   */
  private setupReactiveDisable(): void {
    const instance = this.componentRef?.instance;
    if (!instance) return;

    const raw = this.readFirstValue(['modalPrimaryDisabled']);

    if (typeof raw === 'function') {
      /* Es un signal o computed → effect() lo rastrea reactivamente */
      effect(() => {
        const v = (instance['modalPrimaryDisabled'] as () => unknown)();
        this.disablePrimary.set(typeof v === 'boolean' ? v : false);
      }, { injector: this.injector });
      return;
    }

    /* Es un getter sobre ReactiveForm → suscribir statusChanges */
    for (const key of Object.keys(instance)) {
      const val = instance[key];
      if (val instanceof AbstractControl) {
        val.statusChanges.subscribe(() => {
          this.disablePrimary.set(this.resolveBoolean(['modalPrimaryDisabled'], false));
        });
        return;
      }
    }
  }

  close() {
    this.ref.close(null);
  }

  onCancel(): void {
    this.ref.close(null);
  }

  async onPrimary(): Promise<void> {
    const handler = this.getFirstMethod([
      'modalOnPrimary',
      'onModalPrimary',
      'guardar',
      'save'
    ]);

    if (!handler) {
      this.ref.close(true);
      return;
    }

    const result = await handler();

    if (result !== undefined) {
      this.ref.close(result);
    }
  }

  /* ─────────────────────────────
     HELPERS (igual que antes)
  ───────────────────────────── */
  private resolveString(keys: string[], fallback: string): string {
    const value = this.readFirstValue(keys);
    return typeof value === 'string' && value.trim() ? value : fallback;
  }

  private resolveBoolean(keys: string[], fallback: boolean): boolean {
    const value = this.readFirstValue(keys);

    if (typeof value === 'function') {
      try {
        const resolved = value();
        return typeof resolved === 'boolean' ? resolved : fallback;
      } catch {
        return fallback;
      }
    }

    return typeof value === 'boolean' ? value : fallback;
  }

  private readFirstValue(keys: string[]): unknown {
    const instance = this.componentRef?.instance;

    if (!instance) return undefined;

    for (const key of keys) {
      if (!(key in instance)) continue;
      return instance[key];
    }

    return undefined;
  }

  private getFirstMethod(keys: string[]) {
    const instance = this.componentRef?.instance;

    if (!instance) return null;

    for (const key of keys) {
      if (typeof instance[key] === 'function') {
        return () => instance[key].call(instance);
      }
    }

    return null;
  }
}