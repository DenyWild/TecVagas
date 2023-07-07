import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato/cadastro-candidato.component';
import { CursosCandidatoComponent } from './cursos-candidato/cursos-candidato/cursos-candidato.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { SCandidatoComponent } from './s-candidato/s-candidato/s-candidato.component';
import { SEmpresaComponent } from './s-empresa/s-empresa/s-empresa.component';
import { SobreComponent } from './sobre/sobre/sobre.component';

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
  },
  { path: 'sobre', component: SobreComponent},
  { path: 'sobre',
  loadChildren: () => import('./sobre/sobre.module').then(m => m.SobreModule)
  },
  { path: 'cadcandidato', component: CadastroCandidatoComponent},
  { path: 'cadcandidato',
  loadChildren: () => import('./cadastro-candidato/cadastro-candidato.module').then(m => m.CadastroCandidatoModule)
  },
  { path: 'login', component: LoginComponent},
  { path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
