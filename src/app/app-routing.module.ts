import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato/cadastro-candidato.component';
import { CursosCandidatoComponent } from './cursos-candidato/cursos-candidato/cursos-candidato.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { LoginCandidatoComponent } from './login-candidato/login-candidato/login-candidato.component';
import { LoginEmpresaComponent } from './login-empresa/login-empresa/login-empresa.component';
import { LoginComponent } from './login/login/login.component';
import { SobreComponent } from './sobre/sobre/sobre.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', component: HomeComponent },
  { path: 'cursos', component: CursosCandidatoComponent},
  { path: 'cursos',
  loadChildren: () => import('./cursos-candidato/cursos-candidato.module').then(m => m.CursosCandidatoModule)
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
  },
  { path: 'loginempresa', component: LoginEmpresaComponent},
  { path: 'loginempresa',
  loadChildren: () => import('./login-empresa/login-empresa.module').then(m => m.LoginEmpresaModule)
  },
  { path: 'logincandidato', component: LoginCandidatoComponent},
  { path: 'logincandidato',
  loadChildren: () => import('./login-candidato/login-candidato.module').then(m => m.LoginCandidatoModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
