import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCandidatoComponent } from './s-candidato.component';

describe('SCandidatoComponent', () => {
  let component: SCandidatoComponent;
  let fixture: ComponentFixture<SCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SCandidatoComponent]
    });
    fixture = TestBed.createComponent(SCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
