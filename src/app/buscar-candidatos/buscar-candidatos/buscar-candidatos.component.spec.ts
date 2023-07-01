import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCandidatosComponent } from './buscar-candidatos.component';

describe('BuscarCandidatosComponent', () => {
  let component: BuscarCandidatosComponent;
  let fixture: ComponentFixture<BuscarCandidatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarCandidatosComponent]
    });
    fixture = TestBed.createComponent(BuscarCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
