import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTramites } from './list-tramites';

describe('ListTramites', () => {
  let component: ListTramites;
  let fixture: ComponentFixture<ListTramites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTramites]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTramites);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
