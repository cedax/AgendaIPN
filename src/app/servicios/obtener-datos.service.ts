import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ObtenerDatosService {

  constructor(private firestore: AngularFirestore) { }

  obtenerMaterias(UUID: string) {
    return this.firestore.collection('materias').ref.where('UUID', '==', UUID).get();
  }


}
