import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CadastrarCurriculoRoutingModule } from './cadastrar-curriculo-routing.module';
import { CadastrarCurriculoComponent } from './cadastrar-curriculo/cadastrar-curriculo.component';

@NgModule({
  declarations: [
    CadastrarCurriculoComponent
  ],
  imports: [
    CommonModule,
    CadastrarCurriculoRoutingModule,
    AppMaterialModule
  ]
})
export class CadastrarCurriculoModule { }
