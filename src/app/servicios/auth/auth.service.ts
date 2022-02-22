import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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
}