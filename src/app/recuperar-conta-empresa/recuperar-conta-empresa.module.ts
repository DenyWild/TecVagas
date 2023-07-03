import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperarContaEmpresaRoutingModule } from './recuperar-conta-empresa-routing.module';
import { RecuperarContaEmpresaComponent } from './recuperar-conta-empresa/recuperar-conta-empresa.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [
    RecuperarContaEmpresaComponent
  ],
  imports: [
    CommonModule,
    RecuperarContaEmpresaRoutingModule,
    AppMaterialModule
  ]
})
export class RecuperarContaEmpresaModule { }
