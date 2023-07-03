import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { InformacaoCandidatoRoutingModule } from './informacao-candidato-routing.module';
import { InformacaoCandidatoComponent } from './informacao-candidato/informacao-candidato.component';

@NgModule({
  declarations: [
    InformacaoCandidatoComponent
  ],
  imports: [
    CommonModule,
    InformacaoCandidatoRoutingModule,
    AppMaterialModule
  ]
})
export class InformacaoCandidatoModule { }
