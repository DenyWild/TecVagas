import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { LoginCandidatoRoutingModule } from './login-candidato-routing.module';
import { LoginCandidatoComponent } from './login-candidato/login-candidato.component';

@NgModule({
  declarations: [
    LoginCandidatoComponent
  ],
  imports: [
    CommonModule,
    LoginCandidatoRoutingModule,
    AppMaterialModule
  ]
})
export class LoginCandidatoModule { }
