import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacaoCandidatoComponent } from './formacao-candidato.component';

describe('FormacaoCandidatoComponent', () => {
  let component: FormacaoCandidatoComponent;
  let fixture: ComponentFixture<FormacaoCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormacaoCandidatoComponent]
    });
    fixture = TestBed.createComponent(FormacaoCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
