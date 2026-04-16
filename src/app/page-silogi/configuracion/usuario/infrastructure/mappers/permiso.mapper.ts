import { AsignarPermisos, EliminarPermisos, ModuloPermiso, Permiso, RolPermiso } from '../../domain/entities/permiso.entity';
import { AsignarPermisosDTO, EliminarPermisosDTO, ModuloPermisoDTO, PermisoDTO, RolPermisoDTO } from '../dto/permiso.dto';

export class PermisoMapper {
  static toDomainModuloPermiso(modulo: ModuloPermisoDTO): ModuloPermiso {
    return new ModuloPermiso(
      modulo.nombreModulo,
      (modulo.roles ?? []).map((rol) => this.toDomainRolPermiso(rol))
    );
  }

  static toDomainRolPermiso(rol: RolPermisoDTO): RolPermiso {
    return new RolPermiso(
      rol.nombreRol,
      rol.descripcionRol,
      (rol.permisos ?? []).map((permiso) => this.toDomainPermiso(permiso))
    );
  }

  static toDomainPermiso(permiso: PermisoDTO): Permiso {
    return new Permiso(permiso.codigoPermiso, permiso.descripcionPermiso);
  }

  static toApiAsignarPermisos(asignar: AsignarPermisos): AsignarPermisosDTO {
    return {
      codigoUsuario: asignar.idUsuario,
      codigoPermiso: asignar.idPermiso,
    };
  }

  static toApiEliminarPermisos(eliminar: EliminarPermisos): EliminarPermisosDTO {
    return {
      codigoUsuario: eliminar.idUsuario,
      codigoPermiso: eliminar.idPermiso,
    };
  }
}
