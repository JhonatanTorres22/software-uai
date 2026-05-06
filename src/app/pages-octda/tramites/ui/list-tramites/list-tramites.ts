import { Component, computed, inject, signal } from '@angular/core';
import { EliminarTramite, EstadoTramite, ListarTramite, RolSolicitante } from '../../domain/entity/tramite.entity';
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
import { ObtenerTramitesUseCase } from '../../application/use-cases/tramites/obtenerTramites.use-case';
import { ObtenerTramitesPorSubCategoriaUseCase } from '../../application/use-cases/tramites/obtenerTramitesPorSubCategoria.use-case';
import * as XLSX from 'xlsx';
import { EliminarTramiteUseCase } from '../../application/use-cases/tramites/eliminarTramite.use-case';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { NotificationService } from '@/shared/services/notification.service';
import { DetailsTramite } from '../details-tramite/details-tramite';

interface TagConfig {
  label: string;
  severity: 'success' | 'info' | 'warn' | 'danger' | 'contrast' | 'secondary';
  icon: string;
}

@Component({
  selector: 'app-list-tramites',
  imports: [CommonModule, TableModule, TagModule, IconFieldModule, InputIconModule, UiButtonComponent, InputTextModule,
    UiCardNoItems, UiIconButton, CardModule, SelectModule, FormsModule, UiSelectComponent, TimeLineTramite, DrawerModule,
    GenerarTramite],
  templateUrl: './list-tramites.html',
  styleUrl: './list-tramites.scss',
})
export class ListTramites {
  private readonly tramiteSignal = inject(TramiteSignal);
  private readonly obtenerTramitesUseCase = inject(ObtenerTramitesUseCase);
  private readonly eliminarTramiteUseCase = inject(EliminarTramiteUseCase);
  private readonly obtenerTramitesPorSubCategoriaUseCase = inject(ObtenerTramitesPorSubCategoriaUseCase);
  private readonly notificationService = inject(NotificationService);
  private readonly modalService = inject(ModalService);
  private readonly confirmDialogService = inject(ConfirmDialogService);

  listTramite = this.tramiteSignal.listTramite;
  selectTramiteDefault = this.tramiteSignal.selectTramiteDefault;
  selectTramite = this.tramiteSignal.selectTramite;
  selectedEstado = this.tramiteSignal.selectedEstado;
  selectedCodigoSubCategoria = this.tramiteSignal.selectedCodigoSubCategoria;
  loading = this.tramiteSignal.loading;

  visibleTimeLine = signal(false);
  visibleGenerarTramiteDrawer = signal(false);

  // Opciones para filtro de estado
  estadoOpciones: UiSelect[] = [
    { text: 'Todos los estados', value: '' },
    { text: 'INGRESADO', value: 'INGRESADO' },
    { text: 'PENDIENTE', value: 'PENDIENTE' },
    { text: 'APROBADO', value: 'APROBADO' },
    { text: 'IMPROCEDENTE', value: 'IMPROCEDENTE' },
    { text: 'OBSERVADO', value: 'OBSERVADO' },
  ];

  subCategoriaOpciones = computed<UiSelect[]>(() => {
    const unique = new Map<number, string>();

    for (const tramite of this.listTramite()) {
      if (tramite.idSubCategoriaTramite <= 0 || unique.has(tramite.idSubCategoriaTramite)) {
        continue;
      }

      unique.set(tramite.idSubCategoriaTramite, tramite.nombreSubcategoriaTramite);
    }

    const mapped: UiSelect[] = Array.from(unique.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([codigo, nombre]) => ({
        value: String(codigo),
        text: `${codigo} - ${nombre}`,
      }));

    return [{ text: 'Todas las subcategorias', value: '' }, ...mapped];
  });

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

  onSubCategoriaChange(value: string | null): void {
    const codigo = value ?? '';
    this.selectedCodigoSubCategoria.set(codigo);

    if (!codigo) {
      this.cargarTramites();
      return;
    }

    this.cargarTramitesPorSubCategoria(Number(codigo));
  }

  exportarExcel(): void {
    const rows = this.tramitesFiltrados().map((tramite) => ({
      'Codigo Expediente': tramite.codigoExpediente,
      'Subcategoria': tramite.nombreSubcategoriaTramite,
      'Tipo Documento': tramite.tipoDoc,
      'Nro Documento': tramite.numeroDoc,
      'Solicitante': this.getSolicitanteNombreCompleto(tramite),
      'Rol Solicitante': this.getRolConfig(tramite.tipoSolicitante).label,
      Estado: this.getEstadoConfig(tramite.estado).label,
      Asunto: tramite.asunto,
      Celular: tramite.celularSolicitante,
      Correo: tramite.correoSolicitante,
      'Fecha Tramite': this.formatearFecha(tramite.fechaTramiteCreacion),
    }));

    if (!rows.length) {
      this.notificationService.warn('Sin datos. No hay trámites para exportar con los filtros actuales.');
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Tramites');

    XLSX.writeFile(workbook, `tramites-${new Date().toISOString().slice(0, 10)}.xlsx`);
  }

  cargarTramites(): void {
    this.loading.set(true);
    this.obtenerTramitesUseCase.execute().subscribe({
      next: (response) => {
        this.listTramite.set(response.data ?? []);
        this.loading.set(false);
      },
      error: (err) => {
        console.log(err);
        
        this.loading.set(false);
        this.notificationService.error('Error, No se pudo cargar la lista de trámites.');
      },
    });
  }

  cargarTramitesPorSubCategoria(codigoSubCategoriaTramite: number): void {
    this.loading.set(true);
    this.obtenerTramitesPorSubCategoriaUseCase.execute(codigoSubCategoriaTramite).subscribe({
      next: (response) => {
        this.listTramite.set(response.data ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.notificationService.error('Error, No se pudo cargar la lista de tramites filtrada por subcategoria.');
      },
    });
  }



  // ── Configuraciones de badge por tipo ─────────────────────────────

  getEstadoConfig(estado: EstadoTramite): TagConfig {
    const configs: Record<EstadoTramite, TagConfig> = {
      REGISTRANDO: { label: 'REGISTRANDO', severity: 'secondary', icon: 'pi pi-pencil' },
      INGRESADO: { label: 'INGRESADO', severity: 'info', icon: 'pi pi-file' },
      PENDIENTE: { label: 'PENDIENTE', severity: 'warn', icon: 'pi pi-clock' },
      APROBADO: { label: 'APROBADO', severity: 'success', icon: 'pi pi-check-circle' },
      IMPROCEDENTE: { label: 'IMPROCEDENTE', severity: 'danger', icon: 'pi pi-times-circle' },
      OBSERVADO: { label: 'OBSERVADO', severity: 'contrast', icon: 'pi pi-exclamation-triangle' },
      ANULADO: { label: 'ANULADO', severity: 'danger', icon: 'pi pi-ban' },
    };
    return configs[estado];
  }

  getRolConfig(rol: RolSolicitante): TagConfig {
    const configs: Record<RolSolicitante, TagConfig> = {
      ALUMNO: { label: 'ALUMNO', severity: 'info', icon: 'pi pi-user' },
      DOCENTE: { label: 'DOCENTE', severity: 'success', icon: 'pi pi-book' },
      ADMINISTRATIVO: { label: 'ADMINISTRATIVO', severity: 'warn', icon: 'pi pi-briefcase' },
      EXTERNO: { label: 'EXTERNO', severity: 'danger', icon: 'pi pi-globe' },
    };
    return configs[rol];
  }

  getSolicitanteNombreCompleto(tramite: ListarTramite): string {
    return [tramite.nombreSolicitante, tramite.apePaternoSolicitante, tramite.apeMaternoSolicitante]
      .filter(Boolean)
      .join(' ')
      .trim();
  }

  formatearFecha(fecha: string): string {
    if (!fecha) {
      return '';
    }

    const parsed = new Date(fecha);
    if (Number.isNaN(parsed.getTime())) {
      return fecha;
    }

    return parsed.toLocaleString('es-PE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
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

openModal(tramite: ListarTramite, tipo: 'detalle' | 'encuesta'): void {
  this.selectTramite.set(tramite);

  let component: any;
  let header = '';

  if (tipo === 'detalle') {
    component = DetailsTramite;
    header = 'Detalle del trámite';
  } else {
    component = EncuestaSatisfaccion;
    header = 'Encuesta de Satisfacción';
  }

  const ref = this.modalService.open(component, {
    header,
    width: 'min(90vw, 820px)',
    maximizable: true,
    data: { tramite }
  });

  ref?.onClose.subscribe((result: { success?: boolean } | null) => {
    if (result?.success) {
      // refrescar si quieres
    }
  });
}

  anularTramite(tramite: ListarTramite): void {
    console.log('tramite completo:', tramite);
console.log('idTramite:', tramite.idTramite);
    
    this.confirmDialogService.open({
      type: 'question',
      title: 'Anular trámite',
      message: `¿Estás seguro de que deseas anular el trámite, ${tramite.codigoExpediente}? Esta acción no se puede deshacer.`,
      acceptLabel: 'Sí, anular',
      rejectLabel: 'Cancelar',
      onAccept: () => {
        this.loading.set(true);
        const payload : EliminarTramite = {
          idTramite: tramite.idTramite,
        }

        console.log(payload);

        this.eliminarTramiteUseCase.execute(payload).subscribe({
          next : (res) => {
            this.loading.set(false);
            this.notificationService.success(`${res.message}, trámite anulado correctamente`);
            this.cargarTramites();
          },
          error: (err) => {
            console.log(err);
            
            this.loading.set(false);
            this.notificationService.error('Error, No se pudo anular el trámite.');
          }
        })

      }
    })
  }
}
