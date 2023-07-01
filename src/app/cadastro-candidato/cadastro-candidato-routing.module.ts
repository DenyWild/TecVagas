import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';

const routes: Routes = [
  {path: '', component: CadastroCandidatoComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroCandidatoRoutingModule { }
