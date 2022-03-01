import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, DocumentReference } from '@angular/fire/firestore';

import { Materia } from 'src/app/interfaces/materia';

@Injectable({
  providedIn: 'root'
})
export class AgregarDatosService {

  constructor(private firestore: Firestore) { }

  agregarMateria(datos: Materia): Promise<DocumentReference<any>> {
    const materiaRef = collection(this.firestore, 'materias');
    return addDoc(materiaRef, datos);
  }
}
