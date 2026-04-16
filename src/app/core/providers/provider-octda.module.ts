import { NgModule } from "@angular/core";
import { AuthenticatedRepository } from "@/authenticated/application/ports/rolesAsignados.repository";
import { AuthenticatedRepositoryImpl } from "@/authenticated/infrastructure/repositories/rolesAsignados.repository.impl";

@NgModule({
    exports: [],
    imports: [],
    providers: [
        { provide: AuthenticatedRepository, useExisting: AuthenticatedRepositoryImpl }
    ]
})
export class ProviderOctdaModule { }