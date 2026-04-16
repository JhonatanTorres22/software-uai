import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiModalFooter } from './ui-modal-footer';

describe('UiModalFooter', () => {
  let component: UiModalFooter;
  let fixture: ComponentFixture<UiModalFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModalFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiModalFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
