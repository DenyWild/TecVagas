import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContaEmpresaComponent } from './recuperar-conta-empresa.component';

describe('RecuperarContaEmpresaComponent', () => {
  let component: RecuperarContaEmpresaComponent;
  let fixture: ComponentFixture<RecuperarContaEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarContaEmpresaComponent]
    });
    fixture = TestBed.createComponent(RecuperarContaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
