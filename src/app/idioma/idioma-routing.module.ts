import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdiomaComponent } from './idioma/idioma.component';

const routes: Routes = [

  {path: '', component: IdiomaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdiomaRoutingModule { }
