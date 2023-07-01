import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoCandidatoComponent } from './informacao-candidato.component';

describe('InformacaoCandidatoComponent', () => {
  let component: InformacaoCandidatoComponent;
  let fixture: ComponentFixture<InformacaoCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacaoCandidatoComponent]
    });
    fixture = TestBed.createComponent(InformacaoCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
