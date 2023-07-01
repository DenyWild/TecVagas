import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienciaCandidatoRoutingModule } from './experiencia-candidato-routing.module';
import { ExperienciaCandidatoComponent } from './experiencia-candidato/experiencia-candidato.component';
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
    ExperienciaCandidatoComponent
  ],
  imports: [
    CommonModule,
    ExperienciaCandidatoRoutingModule,
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
export class ExperienciaCandidatoModule { }
