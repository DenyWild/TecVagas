import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CadastroCandidatoRoutingModule } from './cadastro-candidato-routing.module';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';

@NgModule({
  declarations: [
    CadastroCandidatoComponent
  ],
  imports: [
    CommonModule,
    CadastroCandidatoRoutingModule,
    AppMaterialModule
  ]
})
export class CadastroCandidatoModule { }

