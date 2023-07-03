import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { BuscarCandidatosRoutingModule } from './buscar-candidatos-routing.module';
import { BuscarCandidatosComponent } from './buscar-candidatos/buscar-candidatos.component';

@NgModule({
  declarations: [
    BuscarCandidatosComponent
  ],
  imports: [
    CommonModule,
    BuscarCandidatosRoutingModule,
    AppMaterialModule
  ]
})
export class BuscarCandidatosModule { }
