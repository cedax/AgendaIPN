import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './vistas/publico/login/login.component';
import { RegistroComponent } from './vistas/publico/registro/registro.component'
import { PagenotfoundComponent } from './vistas/publico/pagenotfound/pagenotfound.component';
import { InicioComponent } from './vistas/privado/inicio/inicio.component';

import { HorarioComponent } from './vistas/privado/horario/horario.component';
import { PanelComponent } from './vistas/privado/panel/panel.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'horario', component: HorarioComponent },
  { path: 'panel', component: PanelComponent },
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
