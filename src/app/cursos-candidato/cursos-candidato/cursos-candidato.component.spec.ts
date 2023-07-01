import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCandidatoComponent } from './cursos-candidato.component';

describe('CursosCandidatoComponent', () => {
  let component: CursosCandidatoComponent;
  let fixture: ComponentFixture<CursosCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosCandidatoComponent]
    });
    fixture = TestBed.createComponent(CursosCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
