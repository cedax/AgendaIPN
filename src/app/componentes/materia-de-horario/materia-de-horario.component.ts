import { Component, Input, OnInit } from '@angular/core';
import { Materia } from 'src/app/interfaces/materia';
import { EliminarDatosService } from 'src/app/servicios/crud/eliminar-datos.service';

@Component({
  selector: 'app-materia-de-horario',
  templateUrl: './materia-de-horario.component.html',
  styleUrls: ['./materia-de-horario.component.scss']
})
export class MateriaDeHorarioComponent implements OnInit {
  @Input() datosForm!: Materia;
  mostrar: boolean = true;

  constructor(private eliminarDatosService: EliminarDatosService) { }

  ngOnInit(): void { }

  eliminarTarea(materia: Materia): void {
    this.eliminarDatosService.eliminarMateria(materia.id).then(() => {
      this.mostrar = false;
    });
  }

}
