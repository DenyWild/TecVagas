import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { BuscarVagasRoutingModule } from './buscar-vagas-routing.module';
import { BuscarVagasComponent } from './buscar-vagas/buscar-vagas.component';

@NgModule({
  declarations: [
    BuscarVagasComponent
  ],
  imports: [
    CommonModule,
    BuscarVagasRoutingModule,
    AppMaterialModule
  ]
})
export class BuscarVagasModule { }
