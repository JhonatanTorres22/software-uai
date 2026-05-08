import { Component, computed, inject, output } from '@angular/core';
import { DividerModule } from "primeng/divider";
import { TagModule } from "primeng/tag";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { CommonModule } from '@angular/common';
import { SubCategoriaSignal } from '../../domain/signals/subCategoria.signal';
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";
import { TimelineModule } from 'primeng/timeline';
import { ModalService } from '@/shared/services/modal.service';
import { AddEditConfiguracionSubcategoria } from '../add-edit-configuracion-subcategoria/add-edit-configuracion-subcategoria';
import {
  ListarSubCategoria,
  SubCategoriaArchivoRequerido,
  SubCategoriaDetalle,
  SubCategoriaEtapaProceso
} from '../../domain/entity/subCategoria.entity';
import { ListRutasSubcategoria } from "./list-rutas-subcategoria/list-rutas-subcategoria";
@Component({
  selector: 'app-detalle-subcategoria',
  imports: [DividerModule, TagModule, ButtonModule, CardModule, CommonModule, UiIconButton, TimelineModule, ListRutasSubcategoria],
  templateUrl: './detalle-subcategoria.html',
  styleUrl: './detalle-subcategoria.scss',
})
export class DetalleSubcategoria {
  private readonly subCategoriaSignal = inject(SubCategoriaSignal);
  private readonly modalService = inject(ModalService);

  selectSubCategoria = this.subCategoriaSignal.selectSubCategoria;
  cerrar = output<void>();

  readonly detalle = computed(() => {
    const subcategoria = this.selectSubCategoria();
    const detalle = subcategoria.detalle;
    const etapas = (detalle?.etapasProceso?.length ? detalle.etapasProceso : this.getEtapasDefault())
      .sort((a, b) => a.orden - b.orden);
    const archivos = detalle?.archivosRequeridos?.length ? detalle.archivosRequeridos : this.getArchivosDefault();
    const tiempoTotal = detalle?.tiempoEstimadoTotalDias ?? etapas.reduce((acc, etapa) => acc + etapa.diasEstimados, 0);

    return {
      descripcion: subcategoria.descripcion || 'Sin descripcion registrada para este tramite.',
      tiempoEstimadoTotalDias: tiempoTotal,
      costo: detalle?.costo ?? null,
      etapasProceso: etapas,
      archivosRequeridos: archivos,
    };
  });

  formatosLabel(archivo: SubCategoriaArchivoRequerido): string {
    return archivo.formatosPermitidos.join(' / ');
  }

  costoLabel(costo: number | null): string {
    if (costo === null || costo === undefined) {
      return 'No aplica';
    }

    return `S/ ${costo.toFixed(2)}`;
  }

  abrirConfiguracion(): void {
    const subCategoria = this.selectSubCategoria();
    if (!subCategoria || subCategoria.idSubCategoriaTramite <= 0) {
      return;
    }

    const ref = this.modalService.open(AddEditConfiguracionSubcategoria, {
      header: `Configuracion de ${subCategoria.nombre}`,
      width: 'min(95vw, 980px)',
      data: {
        subCategoria,
      },
      maximizable: true,
    });

    ref.onClose.subscribe((result: { success?: boolean; detalle?: SubCategoriaDetalle } | null) => {
      if (!result?.success || !result.detalle) {
        return;
      }

      const actualizada: ListarSubCategoria = {
        ...subCategoria,
        detalle: result.detalle,
      };

      this.subCategoriaSignal.selectSubCategoria.set(actualizada);
      this.subCategoriaSignal.listSubCategoria.update((items) =>
        items.map((item) =>
          item.idSubCategoriaTramite === actualizada.idSubCategoriaTramite ? actualizada : item
        )
      );
    });
  }

  private getEtapasDefault(): SubCategoriaEtapaProceso[] {
    return [
      {
        orden: 1,
        nombreArea: 'Oficina Central de Trámites y Documentos Administrativos',
        responsable: 'Jefe de OCTDA',
        diasEstimados: 1,
        estado: 'pendiente',
        observaciones: 'Recepcion y verificacion inicial del expediente.'
      },
      {
        orden: 2,
        nombreArea: 'Decanatura de FICA',
        responsable: 'Decano de FICA',
        diasEstimados: 2,
        estado: 'pendiente',
        observaciones: 'Revision de requisitos formales y documentacion base.'
      },
      {
        orden: 3,
        nombreArea: 'Dirección de Escuela de Ingeniería de Sistemas',
        responsable: 'Director de Escuela de Ingeniería de Sistemas',
        diasEstimados: 3,
        estado: 'pendiente',
        observaciones: 'Evaluacion tecnica segun criterios del tramite.'
      },
      {
        orden: 4,
        nombreArea: 'Registros Académicos',
        responsable: 'Jefe de Registros Académicos',
        diasEstimados: 2,
        estado: 'pendiente',
        observaciones: 'Validacion final para autorizacion institucional.'
      }
    ];
  }

  private getArchivosDefault(): SubCategoriaArchivoRequerido[] {
    return [
      {
        nombreDocumento: 'Solicitud simple',
        obligatorio: true,
        formatosPermitidos: ['PDF'],
        tamanoMaximoMb: 8,
        observaciones: 'Firmada por el solicitante o representante legal.'
      },
      {
        nombreDocumento: 'DNI escaneado',
        obligatorio: true,
        formatosPermitidos: ['PDF', 'JPG', 'PNG'],
        tamanoMaximoMb: 5,
        observaciones: 'Debe ser legible por ambos lados.'
      },
      {
        nombreDocumento: 'Plano firmado',
        obligatorio: false,
        formatosPermitidos: ['PDF'],
        tamanoMaximoMb: 15,
        observaciones: 'Adjuntar solo cuando aplique al tipo de tramite.',
        ejemploVisual: 'Ejemplo: plano-ubicacion-vigente.pdf'
      },
      {
        nombreDocumento: 'Documento tecnico',
        obligatorio: true,
        formatosPermitidos: ['DOCX', 'PDF'],
        tamanoMaximoMb: 12,
        observaciones: 'Incluir sustento tecnico y conclusiones.'
      }
    ];
  }
}
