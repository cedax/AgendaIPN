import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, Auth } from "firebase/auth";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: Auth = getAuth();

  constructor() { }

  async crearUsuario(email: string, password: string): Promise<string> {
    let respuestaConsulta!: string;
    await createUserWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => respuestaConsulta = userCredential.user.uid)
      .catch(error => respuestaConsulta = error.code);
    return respuestaConsulta;
  }

  async logearUsuario(email: string, password: string): Promise<string> {
    let respuestaConsulta!: string;
    await signInWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => respuestaConsulta = userCredential.user.uid)
      .catch(error => respuestaConsulta = error.code);
    return respuestaConsulta;
  }

  EstadoUsuario(): Observable<any> {
    return new Observable(observer => {
      this.auth.onAuthStateChanged(user => {
        user ? observer.next(user) : observer.next(null)
      });
    });
  }

  cerrarSesion(): void {
    this.auth.signOut();
  }
}