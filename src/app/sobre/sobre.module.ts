import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SobreRoutingModule } from './sobre-routing.module';
import { SobreComponent } from './sobre/sobre.component';


@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    CommonModule,
    SobreRoutingModule,
    AppMaterialModule
  ]
})
export class SobreModule { }
