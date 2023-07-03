import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SEmpresaRoutingModule } from './s-empresa-routing.module';
import { SEmpresaComponent } from './s-empresa/s-empresa.component';

@NgModule({
  declarations: [
    SEmpresaComponent
  ],
  imports: [
    CommonModule,
    SEmpresaRoutingModule,
    AppMaterialModule
  ]
})
export class SEmpresaModule { }
