import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { RecuperarContaCandidatoRoutingModule } from './recuperar-conta-candidato-routing.module';
import { RecuperarContaCandidatoComponent } from './recuperar-conta-candidato/recuperar-conta-candidato.component';

@NgModule({
  declarations: [
    RecuperarContaCandidatoComponent
  ],
  imports: [
    CommonModule,
    RecuperarContaCandidatoRoutingModule,
    AppMaterialModule
  ]
})
export class RecuperarContaCandidatoModule { }
