import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Materia } from 'src/app/interfaces/materia';

@Injectable({
  providedIn: 'root'
})
export class ObtenerDatosService {
  constructor(private firestore: AngularFirestore) { }

  async obtenerMaterias(UUID: string): Promise<Materia[]> {
    let arrayDeMaterias: Materia[] = [];
    const materias = await this.firestore.collection('materias').ref.where('UUID', '==', UUID).get();
    materias.forEach(element => {
      const datos = element.data() as Materia;
      datos.id = element.id;
      arrayDeMaterias.push(datos);
    });
    return arrayDeMaterias;
  }

}
