import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CursosCandidatoRoutingModule } from './cursos-candidato-routing.module';
import { CursosCandidatoComponent } from './cursos-candidato/cursos-candidato.component';

@NgModule({
  declarations: [
    CursosCandidatoComponent
  ],
  imports: [
    CommonModule,
    CursosCandidatoRoutingModule,
    AppMaterialModule
  ]
})
export class CursosCandidatoModule { }
