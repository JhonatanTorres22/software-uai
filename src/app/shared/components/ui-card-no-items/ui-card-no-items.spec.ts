import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCardNoItems } from './ui-card-no-items';

describe('UiCardNoItems', () => {
  let component: UiCardNoItems;
  let fixture: ComponentFixture<UiCardNoItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCardNoItems]
    }).compileComponents();

    fixture = TestBed.createComponent(UiCardNoItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the default message and hide the button when no inputs are sent', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.empty-card__message')?.textContent)
      .toContain('No hay información disponible para este módulo.');
    expect(compiled.querySelector('ui-button')).toBeNull();
  });

  it('should respect custom values when inputs are provided', () => {
    fixture.componentRef.setInput('message', 'No hay resultados para la búsqueda actual.');
    fixture.componentRef.setInput('showButton', true);
    fixture.componentRef.setInput('buttonText', 'Intentar de nuevo');
    fixture.componentRef.setInput('buttonIcon', 'pi pi-search');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('ui-button');

    expect(compiled.querySelector('.empty-card__message')?.textContent)
      .toContain('No hay resultados para la búsqueda actual.');
    expect(button).not.toBeNull();
    expect(button?.textContent).toContain('Intentar de nuevo');
  });
});
