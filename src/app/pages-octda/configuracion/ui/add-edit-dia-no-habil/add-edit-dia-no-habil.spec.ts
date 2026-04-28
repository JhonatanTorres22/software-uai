import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDiaNoHabil } from './add-edit-dia-no-habil';

describe('AddEditDiaNoHabil', () => {
  let component: AddEditDiaNoHabil;
  let fixture: ComponentFixture<AddEditDiaNoHabil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditDiaNoHabil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDiaNoHabil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
