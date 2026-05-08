import { EliminarRutaUseCase } from '@/pages-octda/categoria/application/use-cases/rutas/eliminarRuta.use-case';
import { ObtenerRutasUseCase } from '@/pages-octda/categoria/application/use-cases/rutas/obtenerRutas.use-case';
import { RutaSignal } from '@/pages-octda/categoria/domain/signals/ruta.signal';
import { SubCategoriaSignal } from '@/pages-octda/categoria/domain/signals/subCategoria.signal';
import { ModalService } from '@/shared/services/modal.service';
import { Component, computed, inject, OnInit } from '@angular/core';
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";
import { ListarRutas, EliminarRuta } from '@/pages-octda/categoria/domain/entity/rutas.entity';
import { TagModule } from "primeng/tag";
import { TimelineModule } from "primeng/timeline";
import { CommonModule } from '@angular/common';
import { UiLoading } from "@/shared/components/ui-loading/ui-loading";
import { AddEditConfiguracionSubcategoria } from '../../add-edit-configuracion-subcategoria/add-edit-configuracion-subcategoria';
import { AddEditRutasSubcategoria } from '../add-edit-rutas-subcategoria/add-edit-rutas-subcategoria';

@Component({
  selector: 'app-list-rutas-subcategoria',
  imports: [TagModule, TimelineModule, CommonModule, UiLoading, UiIconButton],
  templateUrl: './list-rutas-subcategoria.html',
  styleUrl: './list-rutas-subcategoria.scss',
})
export class ListRutasSubcategoria implements OnInit {
  private readonly subCategoriaSignal = inject(SubCategoriaSignal);
  private readonly modalService = inject(ModalService);
  private readonly obtenerRutasUseCase = inject(ObtenerRutasUseCase);
  private readonly eliminarRutaUseCase = inject(EliminarRutaUseCase);
  private rutaSignal = inject(RutaSignal)
  listRutas = this.rutaSignal.listRutas;
  loading = this.rutaSignal.loading;
  selectRuta = this.rutaSignal.selectRuta;
  selectRutaDefault = this.rutaSignal.selectRutaDefault;
  ngOnInit(): void {
    this.obtenerRutas()
  }

  obtenerRutas() {
    this.obtenerRutasUseCase.execute();
  }

  openModalAddEditRuta(ruta : ListarRutas) {
    this.selectRuta.set(ruta);

    const ref = this.modalService.open(AddEditRutasSubcategoria,{
      header: ruta.idRuta === 0 ? 'Crear Ruta' : 'Editar Ruta',
      width : 'min(95vw, 980px)',
      maximizable: true
    })

    ref.onClose.subscribe((result : {success: boolean}) => {
      if(result?.success) {
        this.obtenerRutas();
      }
    })
  }

  totalDuracion = computed(() =>
  this.listRutas().reduce(
    (total, ruta) => total + ruta.duracion,
    0
  )
);
  eliminarRuta(ruta: ListarRutas) {
    let eliminar: EliminarRuta = {
      idRuta: ruta.idRuta
    }
    console.log(eliminar);
    
    this.eliminarRutaUseCase.execute(eliminar);
  }
}
