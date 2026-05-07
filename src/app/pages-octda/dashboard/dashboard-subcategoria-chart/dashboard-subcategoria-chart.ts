import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { ButtonModule } from 'primeng/button';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ListarTramite } from '../../tramites/domain/entity/tramite.entity';
import { TramiteSignal } from '@/pages-octda/tramites/domain/signals/tramite.signal';

interface SubcategoriaData {
  nombre: string;
  cantidad: number;
}

@Component({
  selector: 'app-dashboard-subcategoria-chart',
  imports: [CommonModule, NgxEchartsModule, ButtonModule],
  templateUrl: './dashboard-subcategoria-chart.html',
  styleUrl: './dashboard-subcategoria-chart.scss',
})
export class DashboardSubcategoriaChart {
  private readonly tramiteSignal = inject(TramiteSignal)
  listTramite = this.tramiteSignal.listTramite;

  subcategoriasData = computed<SubcategoriaData[]>(() => {
    const tramites = this.listTramite();
    
    // Agrupar por subcategoría
    const subcategoriasMap = new Map<string, number>();
    
    tramites.forEach(tramite => {
      const nombre = tramite.nombreSubcategoriaTramite || 'Sin subcategoría';
      subcategoriasMap.set(nombre, (subcategoriasMap.get(nombre) || 0) + 1);
    });

    // Convertir a array y ordenar por cantidad descendente
    const data = Array.from(subcategoriasMap.entries())
      .map(([nombre, cantidad]) => ({ nombre, cantidad }))
      .sort((a, b) => b.cantidad - a.cantidad)
      .slice(0, 10); // Top 10

    return data;
  });

  chartOption = computed<EChartsOption>(() => {
    const data = this.subcategoriasData();
    
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: 'rgba(124, 58, 237, 0.05)'
          }
        },
        formatter: '<strong>{b}</strong><br/>{c} trámites',
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
      grid: {
        left: '3%',
        right: '6%',
        bottom: '3%',
        top: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        name: 'Cantidad',
        nameTextStyle: {
          color: '#6b7280',
          fontSize: 12,
          fontWeight: 500
        },
        minInterval: 1,
        axisLabel: {
          fontSize: 12,
          color: '#9ca3af'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#f3f4f6',
            type: 'solid'
          }
        }
      },
      yAxis: {
        type: 'category',
        data: data.map(s => s.nombre),
        axisLabel: {
          fontSize: 12,
          width: 180,
          overflow: 'truncate',
          ellipsis: '...',
          color: '#4b5563',
          fontWeight: 500
        },
        axisLine: {
          lineStyle: {
            color: '#e5e7eb'
          }
        },
        axisTick: {
          show: false
        }
      },
      series: [
        {
          name: 'Trámites',
          type: 'bar',
          data: data.map(s => s.cantidad),
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: '#a78bfa' },
                { offset: 1, color: '#7c3aed' }
              ]
            },
            borderRadius: [0, 6, 6, 0]
          },
          emphasis: {
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#8b5cf6' },
                  { offset: 1, color: '#6d28d9' }
                ]
              },
              shadowBlur: 10,
              shadowColor: 'rgba(124, 58, 237, 0.3)',
              shadowOffsetX: 2
            }
          },
          barWidth: '50%',
          label: {
            show: true,
            position: 'right',
            fontSize: 12,
            color: '#6b7280',
            fontWeight: 500,
            distance: 8
          }
        }
      ]
    };
  });

  totalTramites = computed(() => {
    return this.subcategoriasData().reduce((sum, s) => sum + s.cantidad, 0);
  });

  exportToExcel(): void {
    const data = this.subcategoriasData();
    
    if (data.length === 0) {
      return;
    }

    const excelData = data.map(item => ({
      'Subcategoría': item.nombre,
      'Cantidad': item.cantidad
    }));

    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Subcategorías');

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    const fecha = new Date().toISOString().slice(0, 10);
    saveAs(blob, `tramites-por-subcategoria-${fecha}.xlsx`);
  }
}
