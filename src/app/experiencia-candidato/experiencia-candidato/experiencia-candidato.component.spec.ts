import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaCandidatoComponent } from './experiencia-candidato.component';

describe('ExperienciaCandidatoComponent', () => {
  let component: ExperienciaCandidatoComponent;
  let fixture: ComponentFixture<ExperienciaCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienciaCandidatoComponent]
    });
    fixture = TestBed.createComponent(ExperienciaCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
