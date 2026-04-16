import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';

export interface MetricCard {
  label: string;
  value: string;
  delta: string;
  deltaType: 'up' | 'down';
  icon: string;
  iconClass: string;
}

export interface Deal {
  cliente: string;
  oportunidad: string;
  responsable: string;
  valor: string;
  fechaCierre: string;
  estado: 'Ganado' | 'En progreso' | 'Pendiente' | 'Perdido';
}

export interface PipelineStage {
  label: string;
  count: number;
  colorClass: string;
  deals: { name: string; company: string; value: string }[];
}

export interface ActivityItem {
  text: string;
  entity: string;
  time: string;
  dotClass: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, TagModule, TableModule, AvatarModule, DividerModule, ChipModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  metrics: MetricCard[] = [
    { label: 'Ingresos del mes',      value: 'S/. 284K', delta: '+12.4% vs mes anterior', deltaType: 'up',   icon: 'pi pi-dollar',     iconClass: 'mi-blue'  },
    { label: 'Clientes activos',       value: '1,842',    delta: '+38 nuevos este mes',    deltaType: 'up',   icon: 'pi pi-users',      iconClass: 'mi-green' },
    { label: 'Facturas pendientes',    value: '67',       delta: 'S/. 48,200 por cobrar',  deltaType: 'down', icon: 'pi pi-credit-card',iconClass: 'mi-amber' },
    { label: 'Tasa de cierre',         value: '34.7%',    delta: '+2.1% este trimestre',   deltaType: 'up',   icon: 'pi pi-chart-line', iconClass: 'mi-purple'}
  ];

  chartBars = [40, 52, 45, 68, 60, 72, 85, 78, 90, 100, 60, 70];
  chartMonths = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

  pipeline: PipelineStage[] = [
    {
      label: 'Prospección', count: 5, colorClass: 'stage-blue',
      deals: [
        { name: 'Grupo Inka Retail', company: 'Retail',      value: 'S/. 28,000' },
        { name: 'Logística Rápida',  company: 'Transporte',  value: 'S/. 15,500' }
      ]
    },
    {
      label: 'Propuesta', count: 4, colorClass: 'stage-green',
      deals: [
        { name: 'Minera del Sur',   company: 'Minería',      value: 'S/. 94,000' },
        { name: 'Textil Andina SAC',company: 'Manufactura',  value: 'S/. 42,000' }
      ]
    },
    {
      label: 'Negociación', count: 3, colorClass: 'stage-amber',
      deals: [
        { name: 'Consorcio Lima', company: 'Construcción', value: 'S/. 135,000' }
      ]
    },
    {
      label: 'Cierre', count: 2, colorClass: 'stage-red',
      deals: [
        { name: 'Ferreyros S.A.', company: 'Industrial', value: 'S/. 210,000' }
      ]
    }
  ];

  activities: ActivityItem[] = [
    { text: 'Contrato firmado con', entity: 'Textil Andina SAC',  time: 'hace 20 min',  dotClass: 'dot-green' },
    { text: 'Nueva cotización enviada a', entity: 'Minera Norte', time: 'hace 1 hora',  dotClass: 'dot-blue'  },
    { text: 'Factura #INV-2847 vence en 3 días', entity: '',      time: 'hace 2 horas', dotClass: 'dot-amber' },
    { text: 'Reunión agendada con', entity: 'Consorcio Lima',     time: 'hace 3 horas', dotClass: 'dot-blue'  },
    { text: 'Pago recibido de', entity: 'Ferreyros S.A.',         time: 'hace 5 horas', dotClass: 'dot-green' }
  ];

  deals: Deal[] = [
    { cliente: 'Ferreyros S.A.',    oportunidad: 'Implementación ERP Módulo Compras',  responsable: 'Ana Torres',    valor: 'S/. 210,000', fechaCierre: '15 Oct 2025', estado: 'Ganado'      },
    { cliente: 'Consorcio Lima',    oportunidad: 'Licencia anual + soporte premium',   responsable: 'Carlos Ruiz',   valor: 'S/. 135,000', fechaCierre: '30 Oct 2025', estado: 'En progreso' },
    { cliente: 'Minera del Sur',    oportunidad: 'Sistema de gestión de inventarios',  responsable: 'María López',   valor: 'S/. 94,000',  fechaCierre: '05 Nov 2025', estado: 'Pendiente'   },
    { cliente: 'Textil Andina SAC', oportunidad: 'Módulo RR.HH. y planillas',          responsable: 'Pedro Salas',   valor: 'S/. 42,000',  fechaCierre: '20 Nov 2025', estado: 'En progreso' },
    { cliente: 'Grupo Inka Retail', oportunidad: 'Plataforma e-commerce B2B',          responsable: 'Ana Torres',    valor: 'S/. 28,000',  fechaCierre: '10 Dic 2025', estado: 'Perdido'     }
  ];

  getStatusClass(estado: string): string {
    const map: Record<string, string> = {
      'Ganado':       'badge-won',
      'En progreso':  'badge-prog',
      'Pendiente':    'badge-pend',
      'Perdido':      'badge-lost'
    };
    return map[estado] ?? '';
  }

  getInitials(name: string): string {
    return name.split(' ').slice(0,2).map(n => n[0]).join('');
  }
}
