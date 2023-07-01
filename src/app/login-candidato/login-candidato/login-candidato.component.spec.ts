import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCandidatoComponent } from './login-candidato.component';

describe('LoginCandidatoComponent', () => {
  let component: LoginCandidatoComponent;
  let fixture: ComponentFixture<LoginCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginCandidatoComponent]
    });
    fixture = TestBed.createComponent(LoginCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
