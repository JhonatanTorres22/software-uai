import { Component } from '@angular/core';
import * as pdfMakeImport from 'pdfmake/build/pdfmake';
import * as pdfFontsImport from 'pdfmake/build/vfs_fonts';

const pdfMake: any = pdfMakeImport;
const pdfFonts: any = pdfFontsImport;

pdfMake.vfs = pdfFonts.vfs;

@Component({
  selector: 'app-generate-pdf-formato-solicitud',
  templateUrl: './generate-pdf-formato-solicitud.html',
  styleUrl: './generate-pdf-formato-solicitud.scss',
})
export class GeneratePdfFormatoSolicitud {
  generarPDF() {

    const docDefinition: any = {
      content: [
        { text: 'REPORTE COMPLEJO', style: 'header' },

        {
          table: {
            widths: ['*', '*', '*'],
            body: [
              ['Nombre', 'Edad', 'País'],
              ['Juan', '30', 'Perú'],
              ['Ana', '25', 'México']
            ]
          }
        }
      ],

      styles: {
        header: {
          fontSize: 18,
          bold: true
        }
      }
    };

    (pdfMake as any).createPdf(docDefinition).download('reporte.pdf');
  }
}