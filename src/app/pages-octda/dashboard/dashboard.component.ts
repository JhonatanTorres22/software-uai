import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsDashboard } from './cards-dashboard/cards-dashboard';
import { DashboardDonutChart } from './dashboard-donut-chart/dashboard-donut-chart';
import { DashboardTramitesMesChart } from './dashboard-tramites-mes-chart/dashboard-tramites-mes-chart';
import { DashboardSubcategoriaChart } from './dashboard-subcategoria-chart/dashboard-subcategoria-chart';
import { ObtenerTramitesUseCase } from '../tramites/application/use-cases/tramites/obtenerTramites.use-case';
import { ListarTramite } from '../tramites/domain/entity/tramite.entity';
import { TramiteSignal } from '../tramites/domain/signals/tramite.signal';
import { UiLoading } from "@/shared/components/ui-loading/ui-loading";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CardsDashboard,
    DashboardDonutChart,
    DashboardTramitesMesChart,
    DashboardSubcategoriaChart,
    UiLoading
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private readonly obtenerTramitesUseCase = inject(ObtenerTramitesUseCase);
  private readonly tramiteSignal = inject(TramiteSignal)
  loading = this.tramiteSignal.loading;
  listTramites = this.tramiteSignal.listTramite;

  ngOnInit(): void {
    this.cargarTramites();
  }

  cargarTramites(): void {
    this.loading.set(true);

    this.obtenerTramitesUseCase.execute().subscribe({
      next: (response) => {
        this.listTramites.set(response.data);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
      }
    });
  }
}