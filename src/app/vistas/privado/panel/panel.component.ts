import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth/auth.service';
 
import { AgregarDatosService } from 'src/app/servicios/crud/agregar-datos.service';
import { ObtenerDatosService } from 'src/app/servicios/crud/obtener-datos.service';

import { Materia } from 'src/app/interfaces/materia';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})

export class PanelComponent implements OnInit {
  nuevaTareaForm!: FormGroup;
  UUID!: string;
  datosMateria: Materia[] = [];

  constructor(private obtenerDatosService:ObtenerDatosService, private agregarDatosService: AgregarDatosService, private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.auth.EstadoUsuario().subscribe(usuario => {
      if (usuario) {
        this.UUID = usuario.uid;
        this.obtenerDatosService.obtenerMaterias(this.UUID).then((materias: Materia[]) => {
          for(let materia of materias){
            this.datosMateria.push(materia);
          }
        });
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  createForm(): void {
    this.nuevaTareaForm = this.fb.group({
      materia: ["", [Validators.required]],
      horaDiaLunes: "",
      horaDiaMartes: "",
      horaDiaMiercoles: "",
      horaDiaJueves: "",
      horaDiaViernes: "",
    });
  }

  onSubmit(): void {
    if (this.nuevaTareaForm.value.horaDiaLunes == "" && this.nuevaTareaForm.value.horaDiaMartes == "" && this.nuevaTareaForm.value.horaDiaMiercoles == "" && this.nuevaTareaForm.value.horaDiaJueves == "" && this.nuevaTareaForm.value.horaDiaViernes == "") {
      this.nuevaTareaForm.setErrors({
        horaDia: "Debe seleccionar al menos una hora"
      });
    }

    if (this.nuevaTareaForm.valid) {
      const datosForm = this.nuevaTareaForm.value;
      const objetoFinal: Materia = {
        materia: datosForm.materia,
        horaDiaLunes: datosForm.horaDiaLunes,
        horaDiaMartes: datosForm.horaDiaMartes,
        horaDiaMiercoles: datosForm.horaDiaMiercoles,
        horaDiaJueves: datosForm.horaDiaJueves,
        horaDiaViernes: datosForm.horaDiaViernes,
        UUID: this.UUID,
        id: ""
      }
      this.agregarDatosService.agregarMateria(objetoFinal).then((documentoAgregado) => {
        objetoFinal["id"] = documentoAgregado.id;
        this.nuevaTareaForm.reset()
        this.datosMateria.push(objetoFinal);
      }).catch((e) => {
        console.log(e);
      });
    }
  }  
}
