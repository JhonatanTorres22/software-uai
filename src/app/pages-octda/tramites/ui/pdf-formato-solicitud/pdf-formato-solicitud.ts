import { Component, inject, signal, OnInit } from '@angular/core';
import { TramiteSignal } from '../../domain/signals/tramite.signal';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import * as pdfMakeImport from 'pdfmake/build/pdfmake';
import * as pdfFontsImport from 'pdfmake/build/vfs_fonts';
const pdfMake: any = pdfMakeImport;
const pdfFonts: any = pdfFontsImport;

pdfMake.vfs = pdfFonts.vfs;
@Component({
  selector: 'app-pdf-formato-solicitud',
  imports: [CommonModule, ButtonModule],
  templateUrl: './pdf-formato-solicitud.html',
  styleUrl: './pdf-formato-solicitud.scss',
})
export class PdfFormatoSolicitud implements OnInit {
  private readonly tramiterSignal = inject(TramiteSignal);
  private readonly sanitizer = inject(DomSanitizer);

  selectTramite = this.tramiterSignal.selectTramite;
  pdfUrl = signal<SafeResourceUrl | null>(null);
  isGenerating = signal<boolean>(false);

  async ngOnInit() {
    await this.generatePDF();
  }

  async generatePDF() {
    this.isGenerating.set(true);

    try {
      // Importar dinámicamente
      const pdfMakeModule = await import('pdfmake/build/pdfmake');
      const pdfFontsModule = await import('pdfmake/build/vfs_fonts');

      const pdfMake = (pdfMakeModule as any).default || pdfMakeModule;
      const fonts = (pdfFontsModule as any).default || pdfFontsModule;

      // Configurar VFS
      pdfMake.vfs = fonts;

      const tramite = this.selectTramite();
      const docDef: any = {
        pageSize: 'A4',
        pageMargins: [50, 120, 50, 80],
        
        header: {
          margin: [50, 20, 50, 0],
          stack: [
            {
              columns: [
                {
                  width: 'auto',
                  text: 'UA',
                  fontSize: 20,
                  bold: true,
                  color: '#1e3a8a',
                  margin: [0, 5, 10, 0]
                },
                {
                  stack: [
                    {
                      text: 'UNIVERSIDAD',
                      fontSize: 9,
                      color: '#1e3a8a',
                      bold: true
                    },
                    {
                      text: 'AUTÓNOMA DE ICA',
                      fontSize: 13,
                      color: '#1e3a8a',
                      bold: true,
                      letterSpacing: 1
                    },
                    {
                      text: 'Resolución N° 045-2020-SUNEDU/CD',
                      fontSize: 7,
                      color: '#1e3a8a',
                      margin: [0, 1, 0, 0]
                    }
                  ]
                }
              ]
            }
          ]
        },

        content: [
          {
            canvas: [
              {
                type: 'rect',
                x: 0,
                y: 0,
                w: 50,
                h: 25,
                r: 4,
                color: '#1e3a8a'
              }
            ]
          },
          {
            text: '002',
            color: 'white',
            bold: true,
            fontSize: 14,
            absolutePosition: { x: 63, y: 123 }
          },

          { text: '01. SOLICITA:', fontSize: 8, bold: true, color: '#1e3a8a', margin: [0, 15, 0, 3] },
          { text: '...........................................................................................................................', fontSize: 8, color: '#999', margin: [0, 0, 0, 2] },
          { text: tramite.nombreSubcategoriaTramite, fontSize: 9, margin: [0, -12, 0, 0] },
          { text: '...........................................................................................................................', fontSize: 8, color: '#999', margin: [0, 0, 0, 10] },

          { text: '02. DESTINATARIO:', fontSize: 8, bold: true, color: '#1e3a8a', margin: [0, 5, 0, 3] },
          { text: '...........................................................................................................................', fontSize: 8, color: '#999', margin: [0, 0, 0, 10] },

          { text: '03. DATOS DEL USUARIO (Apellido y Nombre)', fontSize: 8, bold: true, color: '#1e3a8a', margin: [0, 5, 0, 3] },
          { text: '...........................................................................................................................', fontSize: 8, color: '#999', margin: [0, 0, 0, 2] },
          { text: `${tramite.apePaternoSolicitante} ${tramite.apeMaternoSolicitante} ${tramite.nombreSolicitante}`, fontSize: 9, margin: [0, -12, 0, 0] },

          {
            columns: [
              {
                width: '33%',
                stack: [
                  { text: '04. CARRERA PROFESIONAL', fontSize: 7, bold: true, color: '#1e3a8a', margin: [0, 8, 0, 2] },
                  { text: '..............................................', fontSize: 7, color: '#999' },
                  { text: tramite.tipoSolicitante.toUpperCase(), fontSize: 8, margin: [0, -10, 0, 0] }
                ]
              },
              {
                width: '33%',
                stack: [
                  { text: '05. SEMESTRE / TURNO', fontSize: 7, bold: true, color: '#1e3a8a', margin: [0, 8, 0, 2] },
                  { text: '..............................................', fontSize: 7, color: '#999' }
                ]
              },
              {
                width: '34%',
                stack: [
                  { text: '06. N° CONTACTO', fontSize: 7, bold: true, color: '#1e3a8a', margin: [0, 8, 0, 2] },
                  { text: '..............................................', fontSize: 7, color: '#999' },
                  { text: tramite.celularSolicitante, fontSize: 8, margin: [0, -10, 0, 0] }
                ]
              }
            ],
            margin: [0, 0, 0, 5]
          },

          {
            columns: [
              {
                width: '33%',
                stack: [
                  { text: '07. N° DE CARNET', fontSize: 7, bold: true, color: '#1e3a8a', margin: [0, 5, 0, 2] },
                  { text: '..............................................', fontSize: 7, color: '#999' }
                ]
              },
              {
                width: '33%',
                stack: [
                  { text: '08. N° D.N.I.', fontSize: 7, bold: true, color: '#1e3a8a', margin: [0, 5, 0, 2] },
                  { text: '..............................................', fontSize: 7, color: '#999' },
                  { text: tramite.numeroDoc, fontSize: 8, margin: [0, -10, 0, 0] }
                ]
              },
              {
                width: '34%',
                stack: [
                  { text: '09. EMAIL', fontSize: 7, bold: true, color: '#1e3a8a', margin: [0, 5, 0, 2] },
                  { text: '..............................................', fontSize: 7, color: '#999' },
                  { text: tramite.correoSolicitante.toLowerCase(), fontSize: 7, margin: [0, -10, 0, 0] }
                ]
              }
            ],
            margin: [0, 0, 0, 5]
          },

          {
            columns: [
              {
                width: '60%',
                stack: [
                  { text: '10. DOMICILIO DEL USUARIO (Calle / Distrito / Provincia)', fontSize: 7, bold: true, color: '#1e3a8a', margin: [0, 5, 0, 2] },
                  { text: '..........................................................................', fontSize: 7, color: '#999' }
                ]
              },
              {
                width: '40%',
                stack: [
                  { text: '11. FACEBOOK', fontSize: 7, bold: true, color: '#1e3a8a', margin: [0, 5, 0, 2] },
                  { text: '.................................................', fontSize: 7, color: '#999' }
                ]
              }
            ],
            margin: [0, 0, 0, 10]
          },

          { text: '12. FUNDAMENTO (Justificación / Motivo del pedido)', fontSize: 8, bold: true, color: '#1e3a8a', margin: [0, 5, 0, 3] },
          { text: '...........................................................................................................................', fontSize: 8, color: '#999', margin: [0, 0, 0, 2] },
          { text: tramite.asunto, fontSize: 9, margin: [0, -12, 0, 0] },
          { text: '...........................................................................................................................', fontSize: 8, color: '#999', margin: [0, 0, 0, 2] },
          { text: '...........................................................................................................................', fontSize: 8, color: '#999', margin: [0, 0, 0, 2] },
          { text: '...........................................................................................................................', fontSize: 8, color: '#999', margin: [0, 0, 0, 2] },
          { text: '...........................................................................................................................', fontSize: 8, color: '#999', margin: [0, 0, 0, 15] },

          {
            columns: [
              {
                width: '50%',
                stack: [
                  { text: '13. ANEXOS:', fontSize: 8, bold: true, color: '#1e3a8a', margin: [0, 0, 0, 3] },
                  { text: '........................................', fontSize: 7, color: '#999' },
                  { text: tramite.archivoAnexo || '', fontSize: 7, margin: [0, -8, 0, 0] },
                  { text: '........................................', fontSize: 7, color: '#999', margin: [0, 2, 0, 0] }
                ]
              },
              {
                width: '50%',
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 220,
                    h: 50,
                    r: 3,
                    lineWidth: 1,
                    lineColor: '#1e3a8a'
                  }
                ]
              }
            ]
          },
          {
            absolutePosition: { x: 340, y: 558 },
            stack: [
              { text: 'RECEPCIÓN DE LA RESPUESTA:', fontSize: 7, bold: true, color: '#1e3a8a', margin: [5, 3, 0, 0] },
              {
                columns: [
                  { text: '☐ PRESENCIAL', fontSize: 7, color: '#1e3a8a', margin: [10, 2, 0, 0], width: 'auto' },
                  { text: '☐ CHINCHA', fontSize: 7, color: '#1e3a8a', margin: [5, 2, 0, 0], width: 'auto' },
                  { text: '☑ ICA', fontSize: 7, color: '#1e3a8a', bold: true, margin: [5, 2, 0, 0], width: 'auto' }
                ]
              },
              { text: '☐ VIRTUAL', fontSize: 7, color: '#1e3a8a', margin: [10, 2, 0, 0] }
            ]
          },

          {
            columns: [
              {
                width: '50%',
                stack: [
                  { text: '14. FECHA:', fontSize: 8, bold: true, color: '#1e3a8a', margin: [0, 15, 0, 2] },
                  { text: '........................................', fontSize: 7, color: '#999' },
                  { text: new Date(tramite.fechaTramiteCreacion).toLocaleDateString('es-PE'), fontSize: 8, margin: [0, -10, 0, 0] }
                ]
              },
              {
                width: '50%',
                stack: [
                  { text: '15. FIRMA:', fontSize: 8, bold: true, color: '#1e3a8a', margin: [0, 15, 0, 2] },
                  { text: '........................................', fontSize: 7, color: '#999' }
                ]
              }
            ]
          }
        ],

        footer: function(currentPage: number, pageCount: number) {
          return {
            margin: [50, 10, 50, 0],
            canvas: [
              {
                type: 'rect',
                x: 0,
                y: 0,
                w: 495,
                h: 55,
                r: 8,
                lineWidth: 2,
                lineColor: '#1e3a8a'
              },
              {
                type: 'rect',
                x: 5,
                y: 5,
                w: 45,
                h: 22,
                r: 3,
                color: '#1e3a8a'
              }
            ],
            stack: [
              {
                text: '002',
                color: 'white',
                bold: true,
                fontSize: 12,
                absolutePosition: { x: 65, y: 757 }
              },
              {
                columns: [
                  {
                    width: 'auto',
                    stack: [
                      { text: 'FECHA:', fontSize: 7, bold: true, margin: [55, -18, 0, 0] },
                      { text: 'ANEXOS:', fontSize: 7, bold: true, margin: [55, 1, 0, 0] }
                    ]
                  },
                  {
                    width: 'auto',
                    stack: [
                      { text: '....................................', fontSize: 7, margin: [3, -18, 0, 0] },
                      { text: '....................................', fontSize: 7, margin: [3, 1, 0, 0] }
                    ]
                  },
                  {
                    width: '*',
                    text: ''
                  },
                  {
                    width: 'auto',
                    stack: [
                      { text: 'ASUNTO:', fontSize: 7, bold: true, margin: [0, -18, 0, 0] },
                      { text: 'DATOS DEL USUARIO:', fontSize: 7, bold: true, margin: [0, 1, 0, 0] }
                    ]
                  },
                  {
                    width: 'auto',
                    stack: [
                      { text: '......................................', fontSize: 7, margin: [3, -18, 0, 0] },
                      { text: '......................................', fontSize: 7, margin: [3, 1, 0, 0] }
                    ]
                  }
                ]
              }
            ]
          };
        }
      };

      // Generar PDF
      const pdf = pdfMake.createPdf(docDef);
      
      // Obtener como data URL
      pdf.getDataUrl((dataUrl: string) => {
        const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dataUrl);
        this.pdfUrl.set(safeUrl);
        this.isGenerating.set(false);
      });

    } catch (error) {
      console.error('Error:', error);
      this.isGenerating.set(false);
    }
  }

  downloadPDF() {
    // Descargar el PDF
  }
}
