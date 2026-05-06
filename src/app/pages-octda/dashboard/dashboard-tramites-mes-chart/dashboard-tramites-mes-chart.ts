import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { ButtonModule } from 'primeng/button';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ListarTramite } from '../../tramites/domain/entity/tramite.entity';
import { TramiteSignal } from '@/pages-octda/tramites/domain/signals/tramite.signal';

interface MesData {
  mes: string;
  cantidad: number;
}

@Component({
  selector: 'app-dashboard-tramites-mes-chart',
  imports: [CommonModule, NgxEchartsModule, ButtonModule],
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
          type: 'shadow'
        },
        formatter: '{b}: {c} trámites'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: data.map(m => m.mes),
        axisLabel: {
          rotate: 45,
          fontSize: 11
        }
      },
      yAxis: {
        type: 'value',
        name: 'Cantidad',
        minInterval: 1
      },
      series: [
        {
          name: 'Trámites',
          type: 'bar',
          data: data.map(m => m.cantidad),
          itemStyle: {
            color: '#3b82f6',
            borderRadius: [4, 4, 0, 0]
          },
          emphasis: {
            itemStyle: {
              color: '#2563eb'
            }
          },
          barWidth: '60%'
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
