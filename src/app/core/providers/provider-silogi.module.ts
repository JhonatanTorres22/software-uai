import { NgModule } from "@angular/core";
import { PermisoRepository } from "@/page-silogi/configuracion/usuario/application/ports/permiso.repository";
import { UsuarioRepository } from "@/page-silogi/configuracion/usuario/application/ports/usuario.repository";
import { PermisoRepositoryImpl } from "@/page-silogi/configuracion/usuario/infrastructure/repository/permiso.repository.impl";
import { UsuarioRepositoryImpl } from "@/page-silogi/configuracion/usuario/infrastructure/repository/usuario.repository.impl";
import { CategoriaRepositoryImpl } from "@/page-silogi/categoria/infrastructure/repository/categoria.repository.impl";
import { CategoriaRepository } from "@/page-silogi/categoria/application/ports/categoria.repository";

import { UnidadDeMedidaRepositoryImpl } from "@/page-silogi/unidad-de-medida/infrastructure/repository/unidad-de-medida.repository.impl";
import { UnidadDeMedidaRepository } from "@/page-silogi/unidad-de-medida/application/ports/unidad-de-medida.repository";
import { MarcaRepository } from "@/page-silogi/marca/application/ports/repository/marca.repository";
import { MarcaRepositoryImpl } from "@/page-silogi/marca/infrastructure/repositories/marca.repository.impl";

@NgModule({
    exports : [],
    imports : [],
    providers : [
        { provide: UsuarioRepository, useClass: UsuarioRepositoryImpl },
        { provide: PermisoRepository, useClass: PermisoRepositoryImpl },
        { provide: CategoriaRepository, useClass: CategoriaRepositoryImpl },
        { provide: UnidadDeMedidaRepository, useClass: UnidadDeMedidaRepositoryImpl },
        { provide: MarcaRepository, useClass: MarcaRepositoryImpl }
    ]
})

export class ProviderSilogiModule {}