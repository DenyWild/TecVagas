import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosCandidatoComponent } from './cursos-candidato/cursos-candidato.component';

const routes: Routes = [
  {path: '', component: CursosCandidatoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosCandidatoRoutingModule { }
