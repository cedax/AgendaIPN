import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EliminarDatosService {

  constructor(private firestore: AngularFirestore) { }

  eliminarMateria(id: string) {
    return this.firestore.collection('materias').doc(id).delete();
  }
}
