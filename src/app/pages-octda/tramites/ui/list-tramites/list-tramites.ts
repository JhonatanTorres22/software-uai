import { Component, computed, inject, signal } from '@angular/core';
import { EstadoTramite, ListarTramite, PrioridadTramite, RolSolicitante } from '../../domain/entity/tramite.entity';
import { MessageService, ConfirmationService } from 'primeng/api';
import { TramitesService } from '../../infrastructure/services/tramite.service';
import { CommonModule } from '@angular/common';
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { UiCardNoItems } from "@/shared/components/ui-card-no-items/ui-card-no-items";
import { InputTextModule } from 'primeng/inputtext';
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";
import { CardModule } from "primeng/card";
import { SelectModule } from "primeng/select";
import { FormsModule } from '@angular/forms';
import { UiSelect } from '@/shared/components/ui-select/ui-select.interface';
import { UiSelectComponent } from "@/shared/components/ui-select/ui-select.component";
import { TramiteSignal } from '../../domain/signals/tramite.signal';
import { ModalService } from '@/shared/services/modal.service';
import { TimeLineTramite } from '../time-line-tramite/time-line-tramite';
import { EncuestaSatisfaccion } from '../encuesta-satisfaccion/encuesta-satisfaccion';
import { GenerarTramite } from '../generar-tramite/generar-tramite';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-list-tramites',
  imports: [CommonModule, TableModule, TagModule, IconFieldModule, InputIconModule, UiButtonComponent, InputTextModule,
    UiCardNoItems, UiIconButton, CardModule, SelectModule, FormsModule, UiSelectComponent, TimeLineTramite, DrawerModule,
    GenerarTramite],
  templateUrl: './list-tramites.html',
  styleUrl: './list-tramites.scss',
})
export class ListTramites {
  private readonly tramiteSignal = inject(TramiteSignal)
  listTramite = this.tramiteSignal.listTramite;
  selectTramiteDefault = this.tramiteSignal.selectTramiteDefault;
  selectTramite = this.tramiteSignal.selectTramite;
  selectedEstado = this.tramiteSignal.selectedEstado;
  loading = this.tramiteSignal.loading;

  private readonly tramitesService = inject(TramitesService);
  private readonly messageService = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);
  visibleTimeLine = signal(false);
  visibleGenerarTramiteDrawer = signal(false);
  private readonly modalService = inject(ModalService)
  // Opciones para filtro de estado
  estadoOpciones: UiSelect[] = [
    { text: 'Todos los estados', value: '' },
    { text: 'Ingresado', value: 'ingresado' },
    { text: 'Pendiente', value: 'pendiente' },
    { text: 'Aprobado', value: 'aprobado' },
    { text: 'Improcedente', value: 'improcedente' },
    { text: 'Observado', value: 'observado' },
  ];

  ngOnInit(): void {
    this.cargarTramites();
  }

  tramitesFiltrados = computed(() => {
    const estado = this.selectedEstado();
    const lista = this.listTramite();

    if (!estado) return lista;

    return lista.filter((t) => t.estado === estado);
  });

  onEstadoChange(value: EstadoTramite | null) {
    this.selectedEstado.set(value);
  }


  cargarTramites(): void {
    this.loading.set(true);
    this.tramitesService.getTramites().subscribe({
      next: (data) => {
        this.listTramite.set(data);
        this.loading.set(false);

      },
      error: () => {
        this.loading.set(false);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo cargar la lista de trámites.',
        });
      },
    });
  }

  // ── Configuraciones de badge por tipo ─────────────────────────────

  getEstadoConfig(estado: EstadoTramite): any {
    const configs: Record<EstadoTramite, any> = {
      ingresado: { label: 'Ingresado', severity: 'info', icon: 'pi pi-file' },
      pendiente: { label: 'Pendiente', severity: 'warn', icon: 'pi pi-clock' },
      aprobado: { label: 'Aprobado', severity: 'success', icon: 'pi pi-check-circle' },
      improcedente: { label: 'Improcedente', severity: 'danger', icon: 'pi pi-times-circle' },
      observado: { label: 'Observado', severity: 'contrast', icon: 'pi pi-exclamation-triangle' },
    };
    return configs[estado];
  }

  getRolConfig(rol: RolSolicitante): any {
    const configs: Record<RolSolicitante, any> = {
      alumno: { label: 'Alumno', severity: 'info', icon: 'pi pi-user' },
      docente: { label: 'Docente', severity: 'success', icon: 'pi pi-book' },
      administrativo: { label: 'Administrativo', severity: 'warn', icon: 'pi pi-briefcase' },
      externo: { label: 'Externo', severity: 'danger', icon: 'pi pi-globe' },
    };
    return configs[rol];
  }

  viewTimeLine(tramite: ListarTramite): void {
    this.selectTramite.set(tramite);
    this.visibleTimeLine.set(true);
  }

  closeTimeLine(): void {
    this.visibleTimeLine.set(false);
  }

  openGenerarTramiteDrawer(tramite: ListarTramite): void {
    this.selectTramite.set(tramite);
    this.visibleGenerarTramiteDrawer.set(true);
  }

  closeGenerarTramiteDrawer(): void {
    this.visibleGenerarTramiteDrawer.set(false);
  }

  openAddModalTramite(tramite: ListarTramite): void {
    this.selectTramite.set(tramite);

    const ref = this.modalService.open(EncuestaSatisfaccion, {
      header: 'Encuesta de Satisfacción',
      width: 'min(90vw, 820px)',
      maximizable: true,
      data: {
        tramite
      }
    });

    ref?.onClose.subscribe((result: { success?: boolean } | null) => {
      if (result?.success) {
        // refrescar tabla si deseas
      }
    });
  }
}
