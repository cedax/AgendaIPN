import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  async crearUsuario(email: string, password: string) {
    const auth = getAuth();
    let res;
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        res = userCredential.user;
      })
      .catch((error) => {
        res = error.code;
      });
    return res;
  }

  async logearUsuario(email: string, password: string) {
    const auth = getAuth();
    let res;
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        res = userCredential.user;
      })
      .catch((error) => {
        res = error.code;
      });
    return res;
  }

  EstadoUsuario() {
    return new Observable((observer) => {
      getAuth().onAuthStateChanged((user) => {
        if (user) {
          observer.next(user);
        } else {
          observer.next(null);
        }
      });
    });
  }

  cerrarSesion() {
    getAuth().signOut();
  }
}