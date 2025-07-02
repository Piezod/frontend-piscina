import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonadosComponents } from './abonados';

describe('Abonados', () => {
  let component: AbonadosComponents;
  let fixture: ComponentFixture<AbonadosComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbonadosComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonadosComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
