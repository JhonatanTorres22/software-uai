import { Component, inject, OnInit } from '@angular/core';
import { CardModule } from "primeng/card";
import { AvatarModule } from "primeng/avatar";
import { ChipModule } from 'primeng/chip';
import { TramiteSignal } from '../../domain/signals/tramite.signal';
import { TagModule } from "primeng/tag";
import { DividerModule } from "primeng/divider";
import { ButtonModule } from "primeng/button";
import { EstadoTramite } from '../../domain/entity/tramite.entity';
import { TagConfig } from '@/shared/models/tagConfig.model';
import { CommonModule } from '@angular/common';
import { PdfFormatoSolicitud } from '../pdf-formato-solicitud/pdf-formato-solicitud';
import { ObtenerPagosPorTramiteUseCase } from '../../application/use-cases/pagoTramite/obtenerPagosPorTramite.use-case';
import { NotificationService } from '@/shared/services/notification.service';
import { PagoTramiteSignal } from '../../domain/signals/pagoTramite.signal';
import { ObtenerEntidadesPorTramiteUseCase } from '../../application/use-cases/entidad/obtenerEntidadPorTramite.use-case';
import { EntidadSignal } from '../../domain/signals/entidad.signal';
import { UiLoading } from "@/shared/components/ui-loading/ui-loading";


@Component({
  selector: 'app-details-tramite',
  imports: [
    CardModule,
    AvatarModule,
    ChipModule,
    TagModule,
    DividerModule,
    ButtonModule,
    CommonModule,
    UiLoading,
    PdfFormatoSolicitud
],
  templateUrl: './details-tramite.html',
  styleUrl: './details-tramite.scss',
})
export class DetailsTramite implements OnInit {

  private readonly tramiteSignal = inject(TramiteSignal);
  selectTramite = this.tramiteSignal.selectTramite;
  private readonly obtenerPagoPorTramiteUseCase = inject(ObtenerPagosPorTramiteUseCase);
  private pagoTramiteSignal = inject(PagoTramiteSignal)
  listPagoTramite = this.pagoTramiteSignal.listPagoTramite;
  loading = this.tramiteSignal.loading;
  private notificationService = inject(NotificationService);
  private readonly obtenerEntidadPorTramiteUseCase = inject(ObtenerEntidadesPorTramiteUseCase);
  private entidadSignal = inject(EntidadSignal);
  listEntidad = this.entidadSignal.listEntidad;

  ngOnInit(): void {
    this.obtenerPagoPorTramite();
    if (this.selectTramite().tipoSolicitante === 'EXTERNO') {
      this.obtenerEntidadPorTramite()
    }
  }

  obtenerPagoPorTramite() {
    this.loading.set(true);
    this.obtenerPagoPorTramiteUseCase.execute(this.selectTramite().idTramite).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.listPagoTramite.set(res.data)
        this.notificationService.success(`${res.message}, Pagos cargados`)
      },
      error: (err) => {
        this.loading.set(false);
        this.notificationService.error(`Error al cargar pagos: ${err.message || 'Error desconocido'}`)
      }
    })
  }

  obtenerEntidadPorTramite() {
    this.loading.set(true);
    this.obtenerEntidadPorTramiteUseCase.execute(this.selectTramite().idTramite).subscribe({
      next: (res) => {
        console.log(res);
        
        this.loading.set(false);
        this.listEntidad.set(res.data)
        this.notificationService.success(`${res.message}, Entidades cargadas`)
      },
      error: (err) => {
        this.loading.set(false);
        this.notificationService.error(`Error al cargar entidades: ${err.message || 'Error desconocido'}`)
      }
    })
  }


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

}
