import { Component, inject } from '@angular/core';
import { TramiteSignal } from '../../domain/signals/tramite.signal';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { DividerModule } from "primeng/divider";
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from "primeng/button";
import { TagModule } from "primeng/tag";
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
export interface SurveyData {
  tramite: string;
  usuario: string;
  fecha: string;
  calificacionGeneral: number | null; // 1=Muy Insatisfecho ... 5=Muy Satisfecho
  atencion: {
    tiempoAtencion: number;
    claridadProceso: number;
    amabilidadPersonal: number;
  };
  plataforma: {
    facilidadUso: number;
    informacionDisponible: number;
  };
  resultado: {
    cumplioExpectativas: number;
    recomendaria: number;
  };
  comentarios: string;
  quickFeedback: string[];
}
 
interface EmojiOption {
  value: number;
  label: string;
  emoji: string;
  color: string;
  bgColor: string;
  borderColor: string;
}
@Component({
  selector: 'app-encuesta-satisfaccion',
  imports: [CommonModule, DividerModule, RatingModule, FormsModule, ButtonModule, TagModule],
  templateUrl: './encuesta-satisfaccion.html',
})
export class EncuestaSatisfaccion {
  private readonly tramiteSignal = inject(TramiteSignal)
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);
  private readonly messageService = inject(MessageService);

  selectTramite = this.tramiteSignal.selectTramite;

  submitted = false;

  readonly atencionItems: Array<{ key: keyof SurveyData['atencion']; label: string; icon: string }> = [
    { key: 'tiempoAtencion', label: 'Tiempo de Atención', icon: 'pi-clock' },
    { key: 'claridadProceso', label: 'Claridad del Proceso', icon: 'pi-info-circle' },
    { key: 'amabilidadPersonal', label: 'Amabilidad del Personal', icon: 'pi-user' },
  ];

  readonly plataformaItems: Array<{ key: keyof SurveyData['plataforma']; label: string; icon: string }> = [
    { key: 'facilidadUso', label: 'Facilidad de Uso', icon: 'pi-desktop' },
    { key: 'informacionDisponible', label: 'Información Disponible', icon: 'pi-file' },
  ];

  readonly resultadoItems: Array<{ key: keyof SurveyData['resultado']; label: string; icon: string }> = [
    { key: 'cumplioExpectativas', label: '¿El trámite cumplió tus expectativas?', icon: 'pi-check-circle' },
    { key: 'recomendaria', label: '¿Recomendarías este servicio?', icon: 'pi-share-alt' },
  ];
 
  quickFeedbackOptions: string[] = [
    'Muy rápido',
    'Fácil de entender',
    'Personal amable',
    'Proceso claro',
    'Sin filas',
    'Todo en orden',
    'Mejorar tiempos',
    'Más información',
    'Mejor señalización',
    'Sistema lento',
  ];
 
  emojiOptions: EmojiOption[] = [
    {
      value: 5,
      label: 'Muy Satisfecho',
      emoji: '😄',
      color: '#16a34a',
      bgColor: '#f0fdf4',
      borderColor: '#86efac',
    },
    {
      value: 4,
      label: 'Satisfecho',
      emoji: '🙂',
      color: '#2563eb',
      bgColor: '#eff6ff',
      borderColor: '#93c5fd',
    },
    {
      value: 3,
      label: 'Neutral',
      emoji: '😐',
      color: '#6b7280',
      bgColor: '#f9fafb',
      borderColor: '#d1d5db',
    },
    {
      value: 2,
      label: 'Insatisfecho',
      emoji: '😟',
      color: '#d97706',
      bgColor: '#fffbeb',
      borderColor: '#fcd34d',
    },
    {
      value: 1,
      label: 'Muy Insatisfecho',
      emoji: '😠',
      color: '#dc2626',
      bgColor: '#fef2f2',
      borderColor: '#fca5a5',
    },
  ];
 
  survey: SurveyData = {
    tramite: '',
    usuario: '',
    fecha: '',
    calificacionGeneral: null,
    atencion: {
      tiempoAtencion: 0,
      claridadProceso: 0,
      amabilidadPersonal: 0,
    },
    plataforma: {
      facilidadUso: 0,
      informacionDisponible: 0,
    },
    resultado: {
      cumplioExpectativas: 0,
      recomendaria: 0,
    },
    comentarios: '',
    quickFeedback: [],
  };
 
  ngOnInit(): void {
    this.loadTramiteData();
  }
 
  get selectedEmoji(): EmojiOption | undefined {
    return this.emojiOptions.find(
      (e) => e.value === this.survey.calificacionGeneral
    );
  }
 
  get isStep1Valid(): boolean {
    return this.survey.calificacionGeneral !== null;
  }
 
 

  get isFormValid(): boolean {
    return this.isStep1Valid 
  }

  get modalPrimaryLabel(): string {
    return 'Enviar Encuesta';
  }

  get modalPrimaryDisabled(): boolean {
    return !this.isFormValid || this.submitted;
  }
 
  selectCalificacion(value: number): void {
    this.survey.calificacionGeneral = value;
  }

  getAtencionValue(key: keyof SurveyData['atencion']): number {
    return this.survey.atencion[key];
  }

  setAtencionValue(key: keyof SurveyData['atencion'], value: number): void {
    this.survey.atencion[key] = value;
  }

  getPlataformaValue(key: keyof SurveyData['plataforma']): number {
    return this.survey.plataforma[key];
  }

  setPlataformaValue(key: keyof SurveyData['plataforma'], value: number): void {
    this.survey.plataforma[key] = value;
  }

  getResultadoValue(key: keyof SurveyData['resultado']): number {
    return this.survey.resultado[key];
  }

  setResultadoValue(key: keyof SurveyData['resultado'], value: number): void {
    this.survey.resultado[key] = value;
  }
 
  toggleQuickFeedback(option: string): void {
    const idx = this.survey.quickFeedback.indexOf(option);
    if (idx === -1) {
      this.survey.quickFeedback.push(option);
    } else {
      this.survey.quickFeedback.splice(idx, 1);
    }
  }
 
  isQuickFeedbackSelected(option: string): boolean {
    return this.survey.quickFeedback.includes(option);
  }
 
  submitSurvey(): void {
    if (!this.isFormValid) {
      return;
    }

    console.log('Survey submitted:', this.survey);
    this.submitted = true;
    this.messageService.add({
      severity: 'success',
      summary: '¡Gracias por tu opinión!',
      detail: 'Tu respuesta fue registrada correctamente.',
      life: 4000,
    });

    // Close modal if running in modal mode
    if (this.ref) {
      setTimeout(() => {
        this.ref.close({ success: true, data: this.survey });
      }, 2000);
    }
  }

  // Alias for modal integration
  guardar(): void {
    this.submitSurvey();
  }
 
  resetSurvey(): void {
    this.submitted = false;
    this.loadTramiteData();
  }

  private loadTramiteData(): void {
    // Try to read from DynamicDialogConfig (modal mode)
    let tramite = this.config?.data?.tramite;
    
    // Fallback to signal if not in modal mode
    if (!tramite) {
      tramite = this.selectTramite();
    }

    this.survey = {
      tramite: tramite?.tipo ?? '',
      usuario: tramite?.solicitante ?? '',
      fecha: tramite?.fechaTramite ?? '',
      calificacionGeneral: null,
      atencion: { tiempoAtencion: 0, claridadProceso: 0, amabilidadPersonal: 0 },
      plataforma: { facilidadUso: 0, informacionDisponible: 0 },
      resultado: { cumplioExpectativas: 0, recomendaria: 0 },
      comentarios: '',
      quickFeedback: [],
    };
  }
}
