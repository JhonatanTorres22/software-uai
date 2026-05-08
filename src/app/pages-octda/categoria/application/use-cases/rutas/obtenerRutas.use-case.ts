import { inject, Injectable } from "@angular/core";
import { RutasRepository } from "../../ports/rutas.repository";
import { RutaSignal } from "@/pages-octda/categoria/domain/signals/ruta.signal";
import { NotificationService } from "@/shared/services/notification.service";

@Injectable({
    providedIn: 'root'
})
export class ObtenerRutasUseCase {
    private readonly repository = inject(RutasRepository)
    private readonly signal = inject(RutaSignal)
    listRutas = this.signal.listRutas;
    loading = this.signal.loading;
    notificationService = inject(NotificationService)
    execute() {
        this.loading.set(true);
         return this.repository.obtenerRutas().subscribe({
            next: (res) => {
                this.loading.set(false);
                this.listRutas.set(res.data)
                this.notificationService.success(`${res.message}, rutas obtenidas correctamente`)
            },
            error : (err) => {
                this.loading.set(false);
                this.notificationService.error(`Error al obtener rutas: ${err.message || 'Error desconocido'}`);
            }
         })
    }
}