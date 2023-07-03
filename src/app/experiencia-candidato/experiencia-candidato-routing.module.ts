import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaCandidatoComponent } from './experiencia-candidato/experiencia-candidato.component';

const routes: Routes = [

  {path: 'expcand', component: ExperienciaCandidatoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienciaCandidatoRoutingModule { }
