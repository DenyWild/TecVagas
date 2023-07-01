import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginEmpresaRoutingModule } from './login-empresa-routing.module';
import { LoginEmpresaComponent } from './login-empresa/login-empresa.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    LoginEmpresaComponent
  ],
  imports: [
    CommonModule,
    LoginEmpresaRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule
  ]
})
export class LoginEmpresaModule { }