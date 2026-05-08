import { inject, Injectable } from "@angular/core";
import { RutasRepository } from "../../ports/rutas.repository";
import { EliminarRuta } from "@/pages-octda/categoria/domain/entity/rutas.entity";
import { NotificationService } from "@/shared/services/notification.service";
import { ConfirmDialogService } from "@/shared/services/confirm-dialog.service";
import { ObtenerRutasUseCase } from "./obtenerRutas.use-case";
import { RutaSignal } from "@/pages-octda/categoria/domain/signals/ruta.signal";

@Injectable({
    providedIn: 'root'
})

export class EliminarRutaUseCase {
    private readonly repository = inject(RutasRepository)
    private readonly notificationService = inject(NotificationService)
    private readonly confirmDialogService = inject(ConfirmDialogService)
    private readonly obtenerRutasUseCase = inject(ObtenerRutasUseCase)
    private readonly rutaSignal = inject(RutaSignal)
    loading = this.rutaSignal.loading

    execute(eliminar: EliminarRuta) {
        return this.confirmDialogService.open({
            type: 'question',
            message: '¿Estás seguro de que deseas eliminar esta ruta?',
            acceptLabel: 'Sí, eliminar',
            rejectLabel: 'No, cancelar',
            onAccept: () => {
                this.loading.set(true);
                this.repository.eliminarRutas(eliminar).subscribe({
                    next: (res) => {
                        this.loading.set(false);
                        this.notificationService.success(`${res.message}, ruta eliminada correctamente`);
                        this.obtenerRutasUseCase.execute();
                    },
                    error: (err) => {
                        console.log(err);
                        
                        this.loading.set(false);
                        this.notificationService.error('No se pudo eliminar la ruta');
                    }
                })

            }
        })
    }
}