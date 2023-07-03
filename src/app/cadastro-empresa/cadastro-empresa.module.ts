import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CadastroEmpresaRoutingModule } from './cadastro-empresa-routing.module';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';

@NgModule({
  declarations: [
    CadastroEmpresaComponent
  ],
  imports: [
    CommonModule,
    CadastroEmpresaRoutingModule,
    AppMaterialModule
  ]
})
export class CadastroEmpresaModule { }
