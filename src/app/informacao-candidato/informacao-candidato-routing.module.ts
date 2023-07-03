import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InformacaoCandidatoComponent } from './informacao-candidato/informacao-candidato.component';

const routes: Routes = [

  {path: '', component: InformacaoCandidatoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacaoCandidatoRoutingModule { }
