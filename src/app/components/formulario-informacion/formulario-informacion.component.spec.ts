import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInformacionComponent } from './formulario-informacion.component';

describe('FormularioInformacionComponent', () => {
  let component: FormularioInformacionComponent;
  let fixture: ComponentFixture<FormularioInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioInformacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
