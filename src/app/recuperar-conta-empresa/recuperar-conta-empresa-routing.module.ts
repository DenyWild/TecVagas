import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecuperarContaEmpresaComponent } from './recuperar-conta-empresa/recuperar-conta-empresa.component';

const routes: Routes = [

  {path: '', component: RecuperarContaEmpresaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecuperarContaEmpresaRoutingModule { }
