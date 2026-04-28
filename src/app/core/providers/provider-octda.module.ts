import { NgModule } from "@angular/core";
import { AuthenticatedRepository } from "@/authenticated/application/ports/rolesAsignados.repository";
import { AuthenticatedRepositoryImpl } from "@/authenticated/infrastructure/repositories/rolesAsignados.repository.impl";
import { CategoriaRepository } from "@/pages-octda/categoria/application/ports/categoria.repository";
import { CategoriaRepositoryImpl } from "@/pages-octda/categoria/infrastructure/repository/categoria.repository.impl";
import { SubCategoriaRepositoryImpl } from "@/pages-octda/categoria/infrastructure/repository/subCategoria.repository.impl";
import { SubCategoriaRepository } from "@/pages-octda/categoria/application/ports/subCategoria.repository";

@NgModule({
    exports: [],
    imports: [],
    providers: [
        { provide: AuthenticatedRepository, useExisting: AuthenticatedRepositoryImpl },
        {provide : CategoriaRepository, useExisting : CategoriaRepositoryImpl},
        {provide : SubCategoriaRepository, useExisting : SubCategoriaRepositoryImpl}
    ]
})
export class ProviderOctdaModule { }