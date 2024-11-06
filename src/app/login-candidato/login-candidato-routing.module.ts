import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginCandidatoComponent } from './login-candidato/login-candidato.component';

const routes: Routes = [

  {path: '', component: LoginCandidatoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginCandidatoRoutingModule {
}
