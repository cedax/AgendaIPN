import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Vistas publicas
import { LoginComponent } from './vistas/publico/login/login.component';
import { RegistroComponent } from './vistas/publico/registro/registro.component';
import { PagenotfoundComponent } from './vistas/publico/pagenotfound/pagenotfound.component';

// Vistas privadas
import { InicioComponent } from './vistas/privado/inicio/inicio.component';
import { HorarioComponent } from './vistas/privado/horario/horario.component';
import { PanelComponent } from './vistas/privado/panel/panel.component';

// Compontentes
import { ProximasTareasComponent } from './componentes/proximas-tareas/proximas-tareas.component';
import { HorarioListaComponent } from './componentes/horario-lista/horario-lista.component';
import { MateriaDeHorarioComponent } from './componentes/materia-de-horario/materia-de-horario.component';
import { NuevaTareaFormComponent } from './componentes/nueva-tarea-form/nueva-tarea-form.component';
import { NuevaNotaFormComponent } from './componentes/nueva-nota-form/nueva-nota-form.component';

// Forms
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

// Servicios
import { AuthService } from './servicios/auth/auth.service';
import { TemaService } from './servicios/tema.service';
import { ObtenerDatosService } from './servicios/crud/obtener-datos.service';
import { AgregarDatosService } from './servicios/crud/agregar-datos.service';
import { EditarDatosService } from './servicios/crud/editar-datos.service';
import { EliminarDatosService } from './servicios/crud/eliminar-datos.service';

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
    ObtenerDatosService,
    AgregarDatosService,
    EditarDatosService,
    EliminarDatosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }