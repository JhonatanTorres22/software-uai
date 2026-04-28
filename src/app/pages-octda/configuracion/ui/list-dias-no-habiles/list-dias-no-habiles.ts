import { CommonModule, DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { TextareaModule } from 'primeng/textarea';
import { UiInputComponent } from "@/shared/components/ui-input/ui-input.component";
import { UiTextAreaComponent } from "@/shared/components/ui-text-area/ui-text-area.component";
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";
import { UiCardNoItems } from "@/shared/components/ui-card-no-items/ui-card-no-items";
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";

interface DiaNoHabil {
  id: number;
  fecha: Date;
  motivo: string;
  creadoEn: Date;
}

@Component({
  selector: 'app-list-dias-no-habiles',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DatePickerModule,
    InputTextModule,
    TagModule,
    TextareaModule,
    TableModule,
    ButtonModule,
    UiInputComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UiTextAreaComponent,
    UiButtonComponent,
    IconFieldModule,
    InputIconModule,
    UiCardNoItems,
    UiIconButton
],
  templateUrl: './list-dias-no-habiles.html',
  styleUrl: './list-dias-no-habiles.scss',
  providers: [DatePipe]
})
export class ListDiasNoHabiles {
  private readonly datePipe = inject(DatePipe);
  private readonly primeng = inject(PrimeNG);

  readonly yearLimit = 2026;
  readonly minDate = new Date(this.yearLimit, 0, 1);
  readonly maxDate = new Date(this.yearLimit, 11, 31);
  readonly esLocale = {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre'
    ],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    today: 'Hoy',
    clear: 'Limpiar',
    weekHeader: 'Sem'
  };

  constructor() {
    this.primeng.setTranslation(this.esLocale);
  }

  readonly selectedDate = signal<Date | null>(null);
  readonly selectedId = signal<number | null>(null);
  readonly diasNoHabiles = signal<DiaNoHabil[]>([
    {
      id: 1,
      fecha: new Date(2026, 5, 13),
      motivo: 'Aniversario de la Universidad Autónoma de Ica',
      creadoEn: new Date(2026, 0, 10)
    },
    {
      id: 2,
      fecha: new Date(2026, 8, 30),
      motivo: 'Inauguración de un nuevo campus',
      creadoEn: new Date(2026, 0, 10)
    },
    {
      id: 3,
      fecha: new Date(2026, 10, 25),
      motivo: 'Descanso para trabajadores',
      creadoEn: new Date(2026, 0, 10)
    },
    {
      id: 4,
      fecha: new Date(2026, 11, 24),
      motivo: 'Fiesta por Navidad',
      creadoEn: new Date(2026, 0, 10)
    },
    {
      id: 5,
      fecha: new Date(2026, 11, 31),
      motivo: 'Fiesta por Año Nuevo',
      creadoEn: new Date(2026, 0, 10)
    }
  ]);

  readonly orderedDiasNoHabiles = computed(() => {
    return [...this.diasNoHabiles()].sort((a, b) => a.fecha.getTime() - b.fecha.getTime());
  });

  readonly selectedDateLabel = computed(() => {
    return this.formatDate(this.selectedDate());
  });

  readonly form = new FormGroup({
    fecha: new FormControl<Date | null>(null, [Validators.required]),
    motivo: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(240)])
  });

  get isEditing(): boolean {
    return this.selectedId() !== null;
  }

  get canSubmit(): boolean {
    return this.form.valid;
  }

  onCalendarSelect(date: Date | null): void {
    if (!date) {
      return;
    }

    const normalizedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (!this.isAllowedYear(normalizedDate)) {
      return;
    }

    this.selectedDate.set(normalizedDate);
    this.form.controls.fecha.setValue(normalizedDate);
    this.form.controls.fecha.markAsTouched();

    const existing = this.findByDate(normalizedDate);
    if (existing) {
      this.startEdit(existing);
    }
  }

  saveDiaNoHabil(): void {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return;
    }

    const fecha = this.form.controls.fecha.value;
    const motivo = this.form.controls.motivo.value?.trim() ?? '';
    if (!fecha || !this.isAllowedYear(fecha)) {
      return;
    }

    const editingId = this.selectedId();
    const duplicated = this.diasNoHabiles().find((item) => {
      if (editingId !== null && item.id === editingId) {
        return false;
      }
      return this.toDateKey(item.fecha) === this.toDateKey(fecha);
    });

    if (duplicated) {
      this.form.controls.fecha.setErrors({ duplicated: true });
      this.form.controls.fecha.markAsTouched();
      return;
    }

    if (editingId !== null) {
      this.diasNoHabiles.update((items) =>
        items.map((item) =>
          item.id === editingId
            ? {
                ...item,
                fecha: new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()),
                motivo
              }
            : item
        )
      );
    } else {
      const newId = Math.max(0, ...this.diasNoHabiles().map((item) => item.id)) + 1;
      this.diasNoHabiles.update((items) => [
        ...items,
        {
          id: newId,
          fecha: new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()),
          motivo,
          creadoEn: new Date()
        }
      ]);
    }

    this.resetFormState();
  }

  startEdit(item: DiaNoHabil): void {
    const normalizedDate = new Date(item.fecha.getFullYear(), item.fecha.getMonth(), item.fecha.getDate());
    this.selectedId.set(item.id);
    this.selectedDate.set(normalizedDate);
    this.form.setValue({
      fecha: normalizedDate,
      motivo: item.motivo
    });
    this.form.markAsUntouched();
  }

  remove(item: DiaNoHabil): void {
    this.diasNoHabiles.update((items) => items.filter((x) => x.id !== item.id));
    if (this.selectedId() === item.id) {
      this.resetFormState();
    }
  }

  cancelEdit(): void {
    this.resetFormState();
  }

  isDateRegistered(date: Date): boolean {
    const key = this.toDateKey(date);
    return this.diasNoHabiles().some((item) => this.toDateKey(item.fecha) === key);
  }

  formatDate(date: Date | null): string {
    if (!date) {
      return '';
    }
    return this.datePipe.transform(date, 'dd / MM / yyyy') ?? '';
  }

  private resetFormState(): void {
    this.selectedId.set(null);
    this.selectedDate.set(null);
    this.form.reset({ fecha: null, motivo: '' });
    this.form.markAsUntouched();
  }

  private findByDate(date: Date): DiaNoHabil | undefined {
    return this.diasNoHabiles().find((item) => this.toDateKey(item.fecha) === this.toDateKey(date));
  }

  private isAllowedYear(date: Date): boolean {
    return date.getFullYear() === this.yearLimit;
  }

  private toDateKey(date: Date): string {
    const y = date.getFullYear();
    const m = `${date.getMonth() + 1}`.padStart(2, '0');
    const d = `${date.getDate()}`.padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

}
