import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { ButtonModule } from 'primeng/button';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ListarTramite, EstadoTramite } from '../../tramites/domain/entity/tramite.entity';
import { TramiteSignal } from '@/pages-octda/tramites/domain/signals/tramite.signal';
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";

interface EstadoData {
  name: string;
  value: number;
  color: string;
}

@Component({
  selector: 'app-dashboard-donut-chart',
  imports: [CommonModule, NgxEchartsModule, ButtonModule, UiButtonComponent],
  templateUrl: './dashboard-donut-chart.html',
  styleUrl: './dashboard-donut-chart.scss',
})
export class DashboardDonutChart {
  // tramites = input.required<ListarTramite[]>();
  private readonly tramiteSignal = inject(TramiteSignal)
  listTramite = this.tramiteSignal.listTramite;

  estadosData = computed<EstadoData[]>(() => {
    const tramites = this.listTramite();
    
    const estadosMap = new Map<EstadoTramite, EstadoData>([
      ['REGISTRANDO', { name: 'Registrando', value: 0, color: '#6b7280' }],
      ['INGRESADO', { name: 'Ingresado', value: 0, color: '#3b82f6' }],
      ['PENDIENTE', { name: 'Pendiente', value: 0, color: '#f59e0b' }],
      ['APROBADO', { name: 'Aprobado', value: 0, color: '#10b981' }],
      ['IMPROCEDENTE', { name: 'Improcedente', value: 0, color: '#ef4444' }],
      ['OBSERVADO', { name: 'Observado', value: 0, color: '#f97316' }],
      ['ANULADO', { name: 'Anulado', value: 0, color: '#374151' }]
    ]);

    tramites.forEach(tramite => {
      const estado = estadosMap.get(tramite.estado);
      if (estado) {
        estado.value++;
      }
    });

    return Array.from(estadosMap.values()).filter(e => e.value > 0);
  });

  chartOption = computed<EChartsOption>(() => {
    const data = this.estadosData();
    
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      legend: {
        bottom: '5%',
        left: 'center',
        textStyle: {
          fontSize: 12
        }
      },
      series: [
        {
          name: 'Estados',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'outside',
            formatter: '{b}: {c}',
            fontSize: 12
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 14,
              fontWeight: 'bold'
            },
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          labelLine: {
            show: true
          },
          data: data.map(item => ({
            name: item.name,
            value: item.value,
            itemStyle: {
              color: item.color
            }
          }))
        }
      ]
    };
  });

  exportToExcel(): void {
    const data = this.estadosData();
    
    if (data.length === 0) {
      return;
    }

    const excelData = data.map(item => ({
      'Estado': item.name,
      'Cantidad': item.value
    }));

    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Estados');

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    const fecha = new Date().toISOString().slice(0, 10);
    saveAs(blob, `tramites-por-estado-${fecha}.xlsx`);
  }
}
