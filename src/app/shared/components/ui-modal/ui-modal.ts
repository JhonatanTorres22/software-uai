import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { UiIconButton } from "../ui-icon-button/ui-icon-button";
import { UiButtonComponent } from '../ui-button/ui-button.component';
import { ModalFooterConfig } from '@/shared/services/modal.service';

@Component({
  selector: 'app-ui-modal',
  imports: [UiIconButton, UiButtonComponent],
  templateUrl: './ui-modal.html',
  styleUrl: './ui-modal.scss',
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

  title = '';
  component: any;
  componentRef: any;

  /* ─────────────────────────────
     INIT (IMPORTANTE)
  ───────────────────────────── */
  ngOnInit() {
    this.title = this.config.data?.['title'] || '';
    this.component = this.config.data?.['component'];

    this.footer = {
      ...this.footer,
      ...(this.config.data?.['footer'] || {})
    };

    this.componentRef = this.container.createComponent(this.component);

    const payload = this.config.data?.['payload'];

    if (payload) {
      Object.assign(this.componentRef.instance, payload);
    }
  }

  /* ─────────────────────────────
     AFTER VIEW (solo fix layout)
  ───────────────────────────── */
  ngAfterViewInit() {
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }

  close() {
    this.ref.close(null);
  }

  /* ─────────────────────────────
     FOOTER LOGIC
  ───────────────────────────── */
  get primaryLabel(): string {
    return this.resolveString(['modalPrimaryLabel'], this.footer.primaryLabel || 'Guardar');
  }

  get cancelLabel(): string {
    return this.resolveString(['modalCancelLabel'], this.footer.cancelLabel || 'Cancelar');
  }

  get showPrimary(): boolean {
    return this.footer.showPrimary ?? true;
  }

  get disablePrimary(): boolean {
    return this.resolveBoolean(['modalPrimaryDisabled'], false);
  }

  get disableCancel(): boolean {
    return this.resolveBoolean(['modalCancelDisabled'], false);
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