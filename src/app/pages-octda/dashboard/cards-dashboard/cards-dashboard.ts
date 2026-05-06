import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTramite } from '../../tramites/domain/entity/tramite.entity';
import { TramiteSignal } from '@/pages-octda/tramites/domain/signals/tramite.signal';

interface EstadoCard {
  estado: string;
  label: string;
  tag: string;
  footerText: string;
  count: number;
  icon: string;
  cardClass: string;
}

@Component({
  selector: 'app-cards-dashboard',
  imports: [CommonModule],
  templateUrl: './cards-dashboard.html',
  styleUrl: './cards-dashboard.scss',
})
export class CardsDashboard {
  private readonly tramiteSignal = inject(TramiteSignal);
  listTramite = this.tramiteSignal.listTramite;

  estadosCards = computed<EstadoCard[]>(() => {
    const tramites = this.listTramite();

    const estados: EstadoCard[] = [
      {
        estado: 'APROBADO',
        label: 'Aprobado',
        tag: 'Completado',
        footerText: 'Sin registros aún',
        count: 0,
        icon: 'pi pi-check-circle',
        cardClass: 'card--aprobado',
      },
      {
        estado: 'IMPROCEDENTE',
        label: 'Improcedente',
        tag: 'Rechazado',
        footerText: 'Sin registros aún',
        count: 0,
        icon: 'pi pi-times-circle',
        cardClass: 'card--improcedente',
      },
      {
        estado: 'PENDIENTE',
        label: 'Pendiente',
        tag: 'En curso',
        footerText: 'Requieren atención',
        count: 0,
        icon: 'pi pi-clock',
        cardClass: 'card--pendiente',
      },

      {
        estado: 'REGISTRANDO',
        label: 'Registrando',
        tag: 'Revisar',
        footerText: 'Sin registros aún',
        count: 0,
        icon: 'pi pi-pencil',
        cardClass: 'card--registrando',
      },
    ];

    tramites.forEach(tramite => {
      const card = estados.find(e => e.estado === tramite.estado);
      if (card) card.count++;
    });
    return estados;
  });
}