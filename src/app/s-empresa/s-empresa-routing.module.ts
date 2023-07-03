import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SEmpresaComponent } from './s-empresa/s-empresa.component';

const routes: Routes = [

  {path: '', component: SEmpresaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SEmpresaRoutingModule { }
