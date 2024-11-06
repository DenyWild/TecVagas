import { BuscarCandidatosModule } from './buscar-candidatos/buscar-candidatos.module';
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
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa/cadastro-empresa.component';
import { CadastrarCurriculoComponent } from './cadastrar-curriculo/cadastrar-curriculo/cadastrar-curriculo.component';
import { BuscarVagasComponent } from './buscar-vagas/buscar-vagas/buscar-vagas.component';
import { BuscarCandidatosComponent } from './buscar-candidatos/buscar-candidatos/buscar-candidatos.component';

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
  { path: 'cadempresa', component: CadastroEmpresaComponent},
  { path: 'cadempresa',
  loadChildren: () => import('./cadastro-empresa/cadastro-empresa.module').then(m => m.CadastroEmpresaModule)
  },
  { path: 'cadcurriculo', component: CadastrarCurriculoComponent},
  { path: 'cadcurriculo',
  loadChildren: () => import('./cadastrar-curriculo/cadastrar-curriculo.module').then(m => m.CadastrarCurriculoModule)
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
  },
  { path: 'buscarvagas', component: BuscarVagasComponent},
  { path: 'buscarvagas',
  loadChildren: () => import('./buscar-vagas/buscar-vagas.module').then(m => m.BuscarVagasModule)
  },
  { path: 'buscarcandidatos', component: BuscarCandidatosComponent},
  { path: 'buscarcandidatos',
  loadChildren: () => import('./buscar-candidatos/buscar-candidatos.module').then(m => m.BuscarCandidatosModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
