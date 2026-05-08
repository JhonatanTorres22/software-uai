import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRuta } from './add-edit-ruta';

describe('AddEditRuta', () => {
  let component: AddEditRuta;
  let fixture: ComponentFixture<AddEditRuta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditRuta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditRuta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
