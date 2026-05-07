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
      ['REGISTRANDO', { name: 'Registrando', value: 0, color: '#64748b' }],
      ['INGRESADO', { name: 'Ingresado', value: 0, color: '#2563eb' }],
      ['PENDIENTE', { name: 'Pendiente', value: 0, color: '#ea580c' }],
      ['APROBADO', { name: 'Aprobado', value: 0, color: '#059669' }],
      ['IMPROCEDENTE', { name: 'Improcedente', value: 0, color: '#dc2626' }],
      ['OBSERVADO', { name: 'Observado', value: 0, color: '#d97706' }],
      ['ANULADO', { name: 'Anulado', value: 0, color: '#475569' }]
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
        formatter: '<strong>{b}</strong><br/>{c} trámites ({d}%)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        textStyle: {
          color: '#374151',
          fontSize: 13
        },
        padding: [10, 14],
        extraCssText: 'border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);'
      },
      legend: {
        bottom: 10,
        left: 'center',
        itemGap: 16,
        textStyle: {
          fontSize: 13,
          color: '#4b5563'
        },
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10
      },
      series: [
        {
          name: 'Estados',
          type: 'pie',
          radius: ['45%', '72%'],
          center: ['50%', '45%'],
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 8,
            borderColor: '#fff',
            borderWidth: 3
          },
          label: {
            show: true,
            position: 'outside',
            formatter: '{b}\n{c}',
            fontSize: 12,
            color: '#374151',
            fontWeight: 500
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 14,
              fontWeight: 600
            },
            itemStyle: {
              shadowBlur: 16,
              shadowOffsetX: 0,
              shadowOffsetY: 4,
              shadowColor: 'rgba(0, 0, 0, 0.2)'
            },
            scale: true,
            scaleSize: 8
          },
          labelLine: {
            show: true,
            length: 12,
            length2: 8,
            lineStyle: {
              color: '#d1d5db'
            }
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
