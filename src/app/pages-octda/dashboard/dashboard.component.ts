import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { TabsModule } from 'primeng/tabs';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TooltipModule } from 'primeng/tooltip';

export interface MetricCard {
  label: string;
  value: string;
  delta: string;
  icon: string;
  iconClass: string;
}

export interface Tramite {
  id: string;
  asunto: string;
  area: string;
  responsable: string;
  fecha: string;
  prioridad: 'Alta' | 'Normal' | 'Baja';
  estado: 'Pendiente' | 'Aprobado' | 'En revisión' | 'Vencido' | 'Improcedente' | 'Observado';
  dias: number;
}

export interface PipelineStage {
  label: string;
  count: number;
  colorVar: string;
  borderClass: string;
  deals: { nm: string; type: string; days: string }[];
}

export interface ActivityItem {
  text: string;
  entity: string;
  text2?: string;
  time: string;
  dotColor: string;
}

export interface SparkArea {
  area: string;
  val: number;
  pts: number[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    AvatarModule,
    TagModule,
    TabsModule,
    InputTextModule,
    SelectModule,
    TooltipModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // ── Métricas (4 cards) ──────────────────────────────────────────────────────
  metrics: MetricCard[] = [
    { label: 'Solicitudes Pendientes', value: '90',  delta: '↑ 8 vs ayer',        icon: 'pi pi-hourglass',    iconClass: 'mi-warn'   },
    { label: 'Solicitudes Aprobadas',  value: '138', delta: '↑ 12 esta semana',    icon: 'pi pi-check-circle', iconClass: 'mi-ok'     },
    { label: 'Improcedentes',          value: '44',  delta: '↓ 3 esta semana',     icon: 'pi pi-times-circle', iconClass: 'mi-danger' },
    { label: 'Vencidos',               value: '29',  delta: '⚠ requieren acción',  icon: 'pi pi-clock',        iconClass: 'mi-purple' },
  ];

  // ── Gráfico de barras mensual ────────────────────────────────────────────────
  barData   = [52, 68, 61, 74, 80, 85, 95, 90, 100, 87, 72, 243];
  months    = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  activeBar = 11;
  get barMax(): number { return Math.max(...this.barData); }
  barHeight(v: number): number { return Math.round((v / this.barMax) * 100); }

  // ── Donut / progreso ─────────────────────────────────────────────────────────
  donutStats = [
    { label: 'Aprobados',     pct: 57, val: 138, color: '#3B6D11', fill: '#97C459', badge: 'b-ok'     },
    { label: 'Pendientes',    pct: 37, val: 90,  color: '#854F0B', fill: '#EF9F27', badge: 'b-warn'   },
    { label: 'Improcedentes', pct: 18, val: 44,  color: '#A32D2D', fill: '#F09595', badge: 'b-danger' },
    { label: 'Vencidos',      pct: 12, val: 29,  color: '#533AB7', fill: '#AFA9EC', badge: 'b-purple' },
  ];

  // ── Sparklines por área ──────────────────────────────────────────────────────
  sparkAreas: SparkArea[] = [
    { area: 'Administración', val: 68, pts: [30,45,50,60,65,68] },
    { area: 'Logística',      val: 52, pts: [20,28,35,40,48,52] },
    { area: 'RRHH',           val: 41, pts: [15,20,28,32,38,41] },
    { area: 'Contabilidad',   val: 37, pts: [10,18,25,30,34,37] },
    { area: 'Legal',          val: 28, pts: [8,12,18,22,25,28]  },
    { area: 'Gerencia',       val: 17, pts: [5,8,10,12,15,17]   },
  ];

  sparkPolyline(pts: number[]): string {
    const mn = Math.min(...pts), mx = Math.max(...pts), rng = mx - mn || 1;
    const w = 80, h = 24;
    return pts.map((v, i) =>
      `${Math.round(i * (w / (pts.length - 1)))},${Math.round(h - ((v - mn) / rng) * h)}`
    ).join(' ');
  }
  sparkLastX(pts: number[]): number { return 80; }
  sparkLastY(pts: number[]): number {
    const mn = Math.min(...pts), mx = Math.max(...pts), rng = mx - mn || 1;
    return Math.round(24 - ((pts[pts.length - 1] - mn) / rng) * 24);
  }

  // ── Actividad reciente ───────────────────────────────────────────────────────
  activities: ActivityItem[] = [
    { text: 'Trámite',                    entity: 'EXP-2025-0347', text2: 'aprobado por Luis Mendoza', time: 'hace 15 min',  dotColor: '#639922' },
    { text: 'Nuevo expediente registrado',entity: 'EXP-2025-0351', time: 'hace 32 min',  dotColor: '#185FA5' },
    { text: 'Trámite',                    entity: 'EXP-2025-0290', text2: 'vencido — requiere atención', time: 'hace 1 hora', dotColor: '#7F77DD' },
    { text: 'Observación emitida para',   entity: 'EXP-2025-0312', time: 'hace 2 horas', dotColor: '#EF9F27' },
    { text: 'Archivado definitivo:',      entity: 'EXP-2024-1198', time: 'hace 3 horas', dotColor: '#639922' },
    { text: 'Improcedente declarado:',    entity: 'EXP-2025-0301', time: 'hace 5 horas', dotColor: '#E24B4A' },
  ];

  // ── Pipeline ─────────────────────────────────────────────────────────────────
  pipeline: PipelineStage[] = [
    { label: 'Recepción',  count: 18, colorVar: '#185FA5', borderClass: 'stage-blue',
      deals: [
        { nm: 'EXP-2025-0351', type: 'Solicitud de permiso',   days: 'Hoy'      },
        { nm: 'EXP-2025-0350', type: 'Informe técnico',         days: 'Hoy'      },
      ]},
    { label: 'En revisión', count: 41, colorVar: '#EF9F27', borderClass: 'stage-amber',
      deals: [
        { nm: 'EXP-2025-0340', type: 'Contrato administrativo', days: '2 días'   },
        { nm: 'EXP-2025-0335', type: 'Recurso de apelación',    days: '3 días'   },
      ]},
    { label: 'Aprobación', count: 25, colorVar: '#97C459', borderClass: 'stage-green',
      deals: [
        { nm: 'EXP-2025-0328', type: 'Resolución directoral',   days: '5 días'   },
      ]},
    { label: 'Notificado', count: 16, colorVar: '#1D9E75', borderClass: 'stage-teal',
      deals: [
        { nm: 'EXP-2025-0315', type: 'Decreto interno',         days: '7 días'   },
      ]},
    { label: 'Archivado',  count: 44, colorVar: '#5F5E5A', borderClass: 'stage-gray',
      deals: [
        { nm: 'EXP-2025-0300', type: 'Acta de reunión',         days: 'Archivado'},
        { nm: 'EXP-2024-1198', type: 'Informe anual',           days: 'Archivado'},
      ]},
  ];

  // ── Tabla de trámites ────────────────────────────────────────────────────────
  allTramites: Tramite[] = [
    { id: 'EXP-2025-0351', asunto: 'Solicitud de licencia por estudio',  area: 'RRHH',          responsable: 'Ana Torres',    fecha: '18 Abr 2025', prioridad: 'Alta',   estado: 'Pendiente',      dias: 0  },
    { id: 'EXP-2025-0347', asunto: 'Aprobación de contrato externo',     area: 'Legal',         responsable: 'Carlos Ruiz',   fecha: '17 Abr 2025', prioridad: 'Normal', estado: 'Aprobado',       dias: 1  },
    { id: 'EXP-2025-0340', asunto: 'Informe de gestión Q1',              area: 'Administración',responsable: 'María López',   fecha: '15 Abr 2025', prioridad: 'Normal', estado: 'En revisión',    dias: 3  },
    { id: 'EXP-2025-0335', asunto: 'Recurso de reconsideración',         area: 'Legal',         responsable: 'Pedro Salas',   fecha: '12 Abr 2025', prioridad: 'Alta',   estado: 'En revisión',    dias: 6  },
    { id: 'EXP-2025-0312', asunto: 'Adquisición de equipos TI',          area: 'Logística',     responsable: 'Luis Mendoza',  fecha: '5 Abr 2025',  prioridad: 'Alta',   estado: 'Observado',      dias: 13 },
    { id: 'EXP-2025-0301', asunto: 'Regularización de contratos',        area: 'Administración',responsable: 'Rosa Quispe',   fecha: '1 Abr 2025',  prioridad: 'Baja',   estado: 'Improcedente',   dias: 17 },
    { id: 'EXP-2025-0290', asunto: 'Renovación de seguros',              area: 'Contabilidad',  responsable: 'Jorge Vega',    fecha: '25 Mar 2025', prioridad: 'Alta',   estado: 'Vencido',        dias: 24 },
    { id: 'EXP-2024-1198', asunto: 'Informe anual 2024',                 area: 'Gerencia',      responsable: 'Ana Torres',    fecha: '15 Feb 2025', prioridad: 'Normal', estado: 'Aprobado',       dias: 62 },
  ];

  tabNames = ['Todos', 'Pendientes', 'Aprobados', 'Vencidos', 'Improcedentes'];
  searchQuery   = '';
  selectedArea  = '';
  selectedTab: number = 0;

  areaOptions = [
    { label: 'Todas las áreas', value: '' },
    ...[ ...new Set(this.allTramites.map(t => t.area)) ].map(a => ({ label: a, value: a })),
  ];

  get filteredTramites(): Tramite[] {
    const tab = ['', 'Pendiente', 'Aprobado', 'Vencido', 'Improcedente'][this.selectedTab] as Tramite['estado'] | '';
    return this.allTramites.filter(t => {
      const matchTab   = !tab || t.estado === tab;
      const matchArea  = !this.selectedArea || t.area === this.selectedArea;
      const matchQuery = !this.searchQuery ||
        t.id.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        t.asunto.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        t.responsable.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchTab && matchArea && matchQuery;
    });
  }

  // ── Helpers ──────────────────────────────────────────────────────────────────
  getInitials(name: string): string {
    return name.split(' ').slice(0, 2).map(n => n[0]).join('');
  }

  getStatusClass(estado: string): string {
    const map: Record<string, string> = {
      'Aprobado':     'badge-ok',
      'Pendiente':    'badge-warn',
      'En revisión':  'badge-blue',
      'Vencido':      'badge-purple',
      'Improcedente': 'badge-danger',
      'Observado':    'badge-warn',
    };
    return map[estado] ?? 'badge-blue';
  }

  getPrioClass(p: string): string {
    return p === 'Alta' ? 'prio-alta' : p === 'Baja' ? 'prio-baja' : 'prio-normal';
  }

  tabChange(index: number): void {
    this.selectedTab  = index;
    this.searchQuery  = '';
    this.selectedArea = '';
  }
}