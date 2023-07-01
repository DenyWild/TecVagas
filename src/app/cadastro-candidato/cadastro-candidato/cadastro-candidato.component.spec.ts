import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCandidatoComponent } from './cadastro-candidato.component';

describe('CadastroCandidatoComponent', () => {
  let component: CadastroCandidatoComponent;
  let fixture: ComponentFixture<CadastroCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroCandidatoComponent]
    });
    fixture = TestBed.createComponent(CadastroCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
