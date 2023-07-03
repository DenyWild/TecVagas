import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SCandidatoComponent } from './s-candidato/s-candidato.component';

const routes: Routes = [

  {path: '', component: SCandidatoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SCandidatoRoutingModule { }
