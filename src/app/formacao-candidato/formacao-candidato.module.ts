import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { FormacaoCandidatoRoutingModule } from './formacao-candidato-routing.module';
import { FormacaoCandidatoComponent } from './formacao-candidato/formacao-candidato.component';

@NgModule({
  declarations: [
    FormacaoCandidatoComponent
  ],
  imports: [
    CommonModule,
    FormacaoCandidatoRoutingModule,
    AppMaterialModule
  ]
})
export class FormacaoCandidatoModule { }
