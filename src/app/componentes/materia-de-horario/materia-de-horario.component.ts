import { Component, Input, OnInit } from '@angular/core';
import { EliminarDatosService } from 'src/app/servicios/eliminar-datos.service';

@Component({
  selector: 'app-materia-de-horario',
  templateUrl: './materia-de-horario.component.html',
  styleUrls: ['./materia-de-horario.component.scss']
})
export class MateriaDeHorarioComponent implements OnInit {
  @Input() datosForm: Array<any> = [];
  datos: Array<any> = [];
  mostrar: boolean = true;

  constructor(private eliminarDatosService: EliminarDatosService) { }

  ngOnInit(): void {
    this.datos.push(this.datosForm);
  }

  eliminarTarea(datos: any) {
    this.eliminarDatosService.eliminarMateria(datos.id).then(() => {
      this.mostrar = false;
    });
  }

}
