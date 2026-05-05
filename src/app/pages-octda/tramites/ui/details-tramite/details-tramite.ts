import { Component, inject } from '@angular/core';
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
import { GeneratePdfFormatoSolicitud } from "../generate-pdf-formato-solicitud/generate-pdf-formato-solicitud";

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
    PdfFormatoSolicitud,
    GeneratePdfFormatoSolicitud
],
  templateUrl: './details-tramite.html',
  styleUrl: './details-tramite.scss',
})
export class DetailsTramite {

  private readonly tramiteSignal = inject(TramiteSignal);
  selectTramite = this.tramiteSignal.selectTramite;

    getEstadoConfig(estado: EstadoTramite): TagConfig {
      const configs: Record<EstadoTramite, TagConfig> = {
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
