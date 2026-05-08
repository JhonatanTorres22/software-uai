import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { ButtonModule } from 'primeng/button';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ListarTramite } from '../../tramites/domain/entity/tramite.entity';
import { TramiteSignal } from '@/pages-octda/tramites/domain/signals/tramite.signal';
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";

interface MesData {
  mes: string;
  cantidad: number;
}

@Component({
  selector: 'app-dashboard-tramites-mes-chart',
  imports: [CommonModule, NgxEchartsModule, ButtonModule, UiButtonComponent],
  templateUrl: './dashboard-tramites-mes-chart.html',
  styleUrl: './dashboard-tramites-mes-chart.scss',
})
export class DashboardTramitesMesChart {
  // tramites = input.required<ListarTramite[]>();
    private readonly tramiteSignal = inject(TramiteSignal)
    listTramite = this.tramiteSignal.listTramite;

  private readonly mesesNombres = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  mesesData = computed<MesData[]>(() => {
    const tramites = this.listTramite();
    
    // Crear mapa con todos los meses del año actual
    const mesesMap = new Map<number, MesData>();
    for (let i = 0; i < 12; i++) {
      mesesMap.set(i, {
        mes: this.mesesNombres[i],
        cantidad: 0
      });
    }

    // Contar trámites por mes
    tramites.forEach(tramite => {
      try {
        // Asumiendo formato: "2024-05-15" o "15/05/2024"
        const fecha = new Date(tramite.fechaTramiteCreacion);
        if (!isNaN(fecha.getTime())) {
          const mes = fecha.getMonth();
          const mesData = mesesMap.get(mes);
          if (mesData) {
            mesData.cantidad++;
          }
        }
      } catch (error) {
        console.warn('Fecha inválida:', tramite.fechaTramiteCreacion);
      }
    });

    return Array.from(mesesMap.values());
  });

  chartOption = computed<EChartsOption>(() => {
    const data = this.mesesData();
    
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: 'rgba(37, 99, 235, 0.05)'
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
        right: '3%',
        bottom: '8%',
        top: '5%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: data.map(m => m.mes),
        axisLabel: {
          rotate: 45,
          fontSize: 12,
          color: '#6b7280',
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
      yAxis: {
        type: 'value',
        name: 'Cantidad',
        nameTextStyle: {
          color: '#6b7280',
          fontSize: 12,
          fontWeight: 500,
          padding: [0, 0, 0, 0]
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
      series: [
        {
          name: 'Trámites',
          type: 'bar',
          data: data.map(m => m.cantidad),
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: '#3b82f6' },
                { offset: 1, color: '#2563eb' }
              ]
            },
            borderRadius: [6, 6, 0, 0]
          },
          emphasis: {
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: '#2563eb' },
                  { offset: 1, color: '#1d4ed8' }
                ]
              },
              shadowBlur: 10,
              shadowColor: 'rgba(37, 99, 235, 0.3)',
              shadowOffsetY: 2
            }
          },
          barWidth: '55%',
          label: {
            show: false
          }
        }
      ]
    };
  });

  totalTramites = computed(() => {
    return this.mesesData().reduce((sum, m) => sum + m.cantidad, 0);
  });

  exportToExcel(): void {
    const data = this.mesesData();
    
    const excelData = data.map(item => ({
      'Mes': item.mes,
      'Cantidad': item.cantidad
    }));

    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Trámites por Mes');

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    const fecha = new Date().toISOString().slice(0, 10);
    saveAs(blob, `tramites-por-mes-${fecha}.xlsx`);
  }
}
