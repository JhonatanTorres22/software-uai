import { RutaSignal } from '@/pages-octda/categoria/domain/signals/ruta.signal';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiSelect } from '@/shared/components/ui-select/ui-select.interface';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CrearRutaUseCase } from '@/pages-octda/categoria/application/use-cases/rutas/crearRuta.use-case';
import { EditarRutaUseCase } from '@/pages-octda/categoria/application/use-cases/rutas/editarRuta.use-case';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { NotificationService } from '@/shared/services/notification.service';
import { CrearRuta, EditarRuta } from '@/pages-octda/categoria/domain/entity/rutas.entity';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-edit-rutas-subcategoria',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AutoCompleteModule, InputNumberModule, ButtonModule],
  templateUrl: './add-edit-rutas-subcategoria.html',
  styleUrl: './add-edit-rutas-subcategoria.scss',
})
export class AddEditRutasSubcategoria implements OnInit {

  signal = inject(RutaSignal);
  selectRuta = this.signal.selectRuta;
  loading = this.signal.loading;

  private readonly crearRutaUseCase = inject(CrearRutaUseCase);
  private readonly editarRutaUseCase = inject(EditarRutaUseCase);
  private confirmDialogService = inject(ConfirmDialogService);
  private notificationService = inject(NotificationService);

  private readonly ref = inject(DynamicDialogRef);
  formRuta: FormGroup;
  posicionSeleccionada: number = 1;

  listRoles: UiSelect[] = [
    { text: 'OCTDA', value: '1' },
    { text: 'REGISTROS ACADÉMICOS', value: '' },
    { text: 'DECANO DE FICA ', value: '14' },
    { text: 'DIRECTOR DE ESCUELA', value: '4' },
    { text: 'SECRETARIA ACADÉMICA', value: '5' },
  ];

  filteredEmisores: UiSelect[] = [];
  filteredReceptores: UiSelect[] = [];

  constructor() {
    this.formRuta = new FormGroup({
      idEmisor: new FormControl('', Validators.required),
      idReceptor: new FormControl('', Validators.required),
      duracion: new FormControl(1, [
        Validators.required,
        Validators.min(1)
      ])
    });
  }

  ngOnInit(): void {
    this.loadInitialData();
    this.initializePosicion();
  }

  private initializePosicion(): void {
    if (this.selectRuta().idRuta === 0) {
      // Modo crear: por defecto al final
      this.posicionSeleccionada = this.signal.listRutas().length + 1;
    } else {
      // Modo editar: mantener la posición actual
      this.posicionSeleccionada = this.selectRuta().orden;
    }
  }

  private loadInitialData(): void {

    if (this.selectRuta().idRuta !== 0) {

      const emisor = this.listRoles.find(
        x => x.value === String(this.selectRuta().idEmisor)
      );

      const receptor = this.listRoles.find(
        x => x.value === String(this.selectRuta().idReceptor)
      );

      this.formRuta.patchValue({
        idEmisor: emisor ?? null,
        idReceptor: receptor ?? null,
        duracion: this.selectRuta().duracion
      });

      return;
    }

    // FIRST ROUTE => OCTDA
    const noHayRutas = this.signal.listRutas().length === 0;

    if (noHayRutas) {

      const octda = this.listRoles.find(
        x => x.text === 'OCTDA'
      );

      this.formRuta.patchValue({
        idEmisor: octda ?? null
      });

      this.formRuta.controls['idEmisor'].disable();
    }
  }

  seleccionarPosicion(posicion: number): void {
    this.posicionSeleccionada = posicion;
  }

  getRoleName(idRol: number): string {
    const rol = this.listRoles.find(r => r.value === String(idRol));
    return rol?.text || 'Sin definir';
  }

  searchEmisor(event: AutoCompleteCompleteEvent): void {

    const query = event.query.toLowerCase();

    const receptor =
      this.formRuta.controls['idReceptor'].value;

    this.filteredEmisores = this.listRoles.filter(role =>
      role.text.toLowerCase().includes(query)
      && role.value !== receptor?.value
    );
  }

  searchReceptor(event: AutoCompleteCompleteEvent): void {

    const query = event.query.toLowerCase();

    const emisor =
      this.formRuta.controls['idEmisor'].value;

    this.filteredReceptores = this.listRoles.filter(role =>
      role.text.toLowerCase().includes(query)
      && role.value !== emisor?.value
    );
  }

  guardar(): void {

    if (this.formRuta.invalid) {
      this.formRuta.markAllAsTouched();
      return;
    }

    const formValue = this.formRuta.getRawValue();

    const basePayload = {
      idEmisor: Number(formValue.idEmisor?.value),
      idReceptor: Number(formValue.idReceptor?.value),
      duracion: formValue.duracion ?? 1,
      orden: this.posicionSeleccionada // Siempre usar la posición seleccionada
    };

    this.confirmDialogService.open({
      type: 'question',
      title: this.selectRuta().idRuta === 0 ? 'Crear ruta' : 'Editar ruta',
      message: this.selectRuta().idRuta === 0 ? '¿Estás seguro de que deseas crear esta ruta?' : '¿Estás seguro de que deseas editar esta ruta?',
      onAccept: () => {
        this.loading.set(true);
        if (this.selectRuta().idRuta === 0) {
          this.crearRuta(basePayload)
        }
        else {
          this.editarRuta({
            ...basePayload,
            idRuta: this.selectRuta().idRuta
          });
        }
      }
    })
  }

  crearRuta(crear: CrearRuta) {
    this.crearRutaUseCase.execute(crear).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.ref.close({ success: true });
        this.notificationService.success(`${res.message}, ruta creada correctamente`);
      },
      error: (err) => {
        console.log(err);
        
        this.loading.set(false);
        this.notificationService.error('Error al crear la ruta');
      }
    });
  }

  editarRuta(editar: EditarRuta) {
    console.log(editar);
    
    this.editarRutaUseCase.execute(editar).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.ref.close({ success: true });
        this.notificationService.success(`${res.message}, ruta editada correctamente`);
      },
      error: (err) => {
        console.log(err);
        
        this.loading.set(false);
        this.notificationService.error('Error al editar la ruta');
      }
    })
  }

}
