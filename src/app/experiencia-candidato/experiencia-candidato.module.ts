import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ExperienciaCandidatoRoutingModule } from './experiencia-candidato-routing.module';
import { ExperienciaCandidatoComponent } from './experiencia-candidato/experiencia-candidato.component';

@NgModule({
  declarations: [
    ExperienciaCandidatoComponent
  ],
  imports: [
    CommonModule,
    ExperienciaCandidatoRoutingModule,
    AppMaterialModule
  ]
})
export class ExperienciaCandidatoModule { }
