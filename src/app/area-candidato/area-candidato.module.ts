import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { AreaCandidatoRoutingModule } from './area-candidato-routing.module';
import { AreaCandidatoComponent } from './area-candidato/area-candidato.component';


@NgModule({
  declarations: [
    AreaCandidatoComponent
  ],
  imports: [
    CommonModule,
    AreaCandidatoRoutingModule,
    AppMaterialModule
  ]
})
export class AreaCandidatoModule { }
