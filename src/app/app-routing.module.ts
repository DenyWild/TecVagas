import { SCandidatoModule } from './s-candidato/s-candidato.module';
import { SCandidatoComponent } from './s-candidato/s-candidato/s-candidato.component';
import { CursosCandidatoComponent } from './cursos-candidato/cursos-candidato/cursos-candidato.component';
import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './home/home.module';
import { CursosCandidatoModule } from './cursos-candidato/cursos-candidato.module';
import { SEmpresaComponent } from './s-empresa/s-empresa/s-empresa.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', component: HomeComponent },
  { path: 'cursos', component: CursosCandidatoComponent},
  { path: 'cursos',
  loadChildren: () => import('./cursos-candidato/cursos-candidato.module').then(m => m.CursosCandidatoModule)
  },
  { path: 'scandidato', component: SCandidatoComponent},
  { path: 'scandidato',
  loadChildren: () => import('./s-candidato/s-candidato.module').then(m => m.SCandidatoModule)
  },
  { path: 'sempresa', component: SEmpresaComponent},
  { path: 'sempresa',
  loadChildren: () => import('./s-empresa/s-empresa.module').then(m => m.SEmpresaModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
