import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecuperarContaCandidatoComponent } from './recuperar-conta-candidato/recuperar-conta-candidato.component';

const routes: Routes = [

  {path: '', component: RecuperarContaCandidatoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecuperarContaCandidatoRoutingModule { }
