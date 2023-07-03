import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginEmpresaComponent } from './login-empresa/login-empresa.component';

const routes: Routes = [

  {path: '', component: LoginEmpresaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginEmpresaRoutingModule { }
