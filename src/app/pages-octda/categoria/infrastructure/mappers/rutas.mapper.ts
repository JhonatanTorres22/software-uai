import { CrearRuta, EditarRuta, EliminarRuta, ListarRutas } from "../../domain/entity/rutas.entity";
import { CrearRutaDTO, EditarRutaDTO, EliminarRutaDTO, ListarRutasDTO } from "../dto/rutas.dto";

export class RutasMapper {
    static toDomainRutas(ruta: ListarRutasDTO): ListarRutas {
        return {
            idRuta: ruta.codigoRuta,
            idEmisor: ruta.emisor,
            idReceptor: ruta.receptor,
            duracion: ruta.duracion,
            orden: ruta.orden,
            fechaCreacion: ruta.fechaCreacion
        }
    }

    static toApiCrearRuta(ruta: CrearRuta): CrearRutaDTO {
        return {
            emisor: 12,
            receptor: 23,
            duracion: ruta.duracion,
            orden: ruta.orden
        }
    }

    static toApiEditarRuta(ruta: EditarRuta): EditarRutaDTO {
        return {
            codigoRuta: ruta.idRuta,
            emisor: 12,
            receptor: 23,
            duracion: ruta.duracion,
            orden: ruta.orden
        }
    }

    static toApiEliminarRuta(ruta: EliminarRuta): EliminarRutaDTO {
        return {
            codigoRuta: ruta.idRuta,
        }
    }
}