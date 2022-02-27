import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AgregarDatosService {

  constructor(private firestore: Firestore) { }

  agregarMateria(datos:any) {
    const materiaRef = collection(this.firestore, 'materias');
    return addDoc(materiaRef, datos);
  }
}
