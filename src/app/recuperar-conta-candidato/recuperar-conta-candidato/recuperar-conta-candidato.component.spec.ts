import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContaCandidatoComponent } from './recuperar-conta-candidato.component';

describe('RecuperarContaCandidatoComponent', () => {
  let component: RecuperarContaCandidatoComponent;
  let fixture: ComponentFixture<RecuperarContaCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarContaCandidatoComponent]
    });
    fixture = TestBed.createComponent(RecuperarContaCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
