import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { LoginEmpresaRoutingModule } from './login-empresa-routing.module';
import { LoginEmpresaComponent } from './login-empresa/login-empresa.component';

@NgModule({
  declarations: [
    LoginEmpresaComponent
  ],
  imports: [
    CommonModule,
    LoginEmpresaRoutingModule,
    AppMaterialModule
  ]
})
export class LoginEmpresaModule { }
