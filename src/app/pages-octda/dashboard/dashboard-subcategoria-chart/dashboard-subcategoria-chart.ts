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
        type: 'value',
        name: 'Cantidad',
        minInterval: 1
      },
      yAxis: {
        type: 'category',
        data: data.map(s => s.nombre),
        axisLabel: {
          fontSize: 11,
          width: 150,
          overflow: 'truncate',
          ellipsis: '...'
        }
      },
      series: [
        {
          name: 'Trámites',
          type: 'bar',
          data: data.map(s => s.cantidad),
          itemStyle: {
            color: '#8b5cf6',
            borderRadius: [0, 4, 4, 0]
          },
          emphasis: {
            itemStyle: {
              color: '#7c3aed'
            }
          },
          barWidth: '60%',
          label: {
            show: true,
            position: 'right',
            fontSize: 11,
            color: '#6b7280'
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
