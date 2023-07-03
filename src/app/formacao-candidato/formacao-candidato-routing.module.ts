import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormacaoCandidatoComponent } from './formacao-candidato/formacao-candidato.component';

const routes: Routes = [

  {path: '', component: FormacaoCandidatoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormacaoCandidatoRoutingModule { }
