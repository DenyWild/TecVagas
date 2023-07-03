import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SCandidatoRoutingModule } from './s-candidato-routing.module';
import { SCandidatoComponent } from './s-candidato/s-candidato.component';

@NgModule({
  declarations: [
    SCandidatoComponent
  ],
  imports: [
    CommonModule,
    SCandidatoRoutingModule,
    AppMaterialModule
  ]
})
export class SCandidatoModule { }
