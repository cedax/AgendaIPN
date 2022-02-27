import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth/auth.service';

import { AgregarDatosService } from 'src/app/servicios/agregar-datos.service';
import { ObtenerDatosService } from 'src/app/servicios/obtener-datos.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  nuevaNotaForm!: FormGroup;
  enviado: boolean = false;
  UUID: string = "";

  datosMateria: Array<any> = [];

  constructor(private obtenerDatosService:ObtenerDatosService, private agregarDatosService: AgregarDatosService, private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.auth.EstadoUsuario().subscribe(user => {
      if (user) {
        // @ts-ignore
        this.UUID = user.uid;
        this.obtenerDatosService.obtenerMaterias(this.UUID).then((e) => {
          e.forEach(element => {
            const data:any = element.data();
            const datoFinal = {
              materia: data.materia,
              horaDiaLunes: data.horaDiaLunes,
              horaDiaMartes: data.horaDiaMartes,
              horaDiaMiercoles: data.horaDiaMiercoles,
              horaDiaJueves: data.horaDiaJueves,
              horaDiaViernes: data.horaDiaViernes,
              UUID: data.UUID,
              id: element.id
            }
            this.datosMateria.push(datoFinal);
          });
        });
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  createForm() {
    this.nuevaNotaForm = this.fb.group({
      materia: ["", [Validators.required]],
      horaDiaLunes: "",
      horaDiaMartes: "",
      horaDiaMiercoles: "",
      horaDiaJueves: "",
      horaDiaViernes: "",
    });
  }

  onSubmit() {
    this.enviado = true;

    if (this.nuevaNotaForm.value.horaDiaLunes == "" && this.nuevaNotaForm.value.horaDiaMartes == "" && this.nuevaNotaForm.value.horaDiaMiercoles == "" && this.nuevaNotaForm.value.horaDiaJueves == "" && this.nuevaNotaForm.value.horaDiaViernes == "") {
      this.nuevaNotaForm.setErrors({
        horaDia: "Debe seleccionar al menos una hora"
      });
    }

    if (this.nuevaNotaForm.valid) {
      const datosForm = this.nuevaNotaForm.value;
      const objetoFinal = {
        materia: datosForm.materia,
        horaDiaLunes: datosForm.horaDiaLunes,
        horaDiaMartes: datosForm.horaDiaMartes,
        horaDiaMiercoles: datosForm.horaDiaMiercoles,
        horaDiaJueves: datosForm.horaDiaJueves,
        horaDiaViernes: datosForm.horaDiaViernes,
        UUID: this.UUID,
        id: ""
      }
      this.agregarDatosService.agregarMateria(objetoFinal).then((e) => {
        objetoFinal["id"] = e.id;
        this.nuevaNotaForm.reset()
        this.datosMateria.push(objetoFinal);
      }).catch((e) => {
        console.log(e);
      });
    }
  }  
}
