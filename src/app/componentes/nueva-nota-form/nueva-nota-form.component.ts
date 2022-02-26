import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-nueva-nota-form',
  templateUrl: './nueva-nota-form.component.html',
  styleUrls: ['./nueva-nota-form.component.scss']
})

export class NuevaNotaFormComponent implements OnInit {
    nuevaNotaForm!: FormGroup;
    enviado: boolean = false;
  
    constructor(private fb: FormBuilder) {
      this.createForm();
    }
  
    ngOnInit(): void {
      
    }
  
    createForm() {
      this.nuevaNotaForm = this.fb.group({
        detalles: ["", [Validators.required]],
        materia: ["", [Validators.required]],
      });
    }
  
    onSubmit() {
      this.enviado = true;
      if (this.nuevaNotaForm.valid) {
        console.log("Formulario válido");
      }
    }  
}
