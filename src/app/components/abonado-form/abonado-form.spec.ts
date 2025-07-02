import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonadoForm } from './abonado-form';

describe('AbonadoForm', () => {
  let component: AbonadoForm;
  let fixture: ComponentFixture<AbonadoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbonadoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonadoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
