import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './vistas/publico/login/login.component';
import { RegistroComponent } from './vistas/publico/registro/registro.component';
import { PagenotfoundComponent } from './vistas/publico/pagenotfound/pagenotfound.component';
import { InicioComponent } from './vistas/privado/inicio/inicio.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 

import { AuthService } from './servicios/auth/auth.service';
import { TemaService } from './servicios/tema.service';
import { ObtenerDatosService } from './servicios/obtener-datos.service';

import { HorarioComponent } from './vistas/privado/horario/horario.component';
import { ProximasTareasComponent } from './componentes/proximas-tareas/proximas-tareas.component';
import { NuevaTareaFormComponent } from './componentes/nueva-tarea-form/nueva-tarea-form.component';
import { HorarioListaComponent } from './componentes/horario-lista/horario-lista.component';
import { PanelComponent } from './vistas/privado/panel/panel.component';
import { NuevaNotaFormComponent } from './componentes/nueva-nota-form/nueva-nota-form.component';
import { MateriaDeHorarioComponent } from './componentes/materia-de-horario/materia-de-horario.component';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PagenotfoundComponent,
    InicioComponent,
    HorarioComponent,
    ProximasTareasComponent,
    NuevaTareaFormComponent,
    HorarioListaComponent,
    PanelComponent,
    NuevaNotaFormComponent,
    MateriaDeHorarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    AuthService,
    TemaService,
    ObtenerDatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
