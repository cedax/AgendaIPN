import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-nueva-tarea-form',
  templateUrl: './nueva-tarea-form.component.html',
  styleUrls: ['./nueva-tarea-form.component.scss']
})
export class NuevaTareaFormComponent implements OnInit {
  nuevaTareaForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void { }

  createForm() {
    this.nuevaTareaForm = this.fb.group({
      detalles: ["", [Validators.required]],
      fechaEntrega: ["", [Validators.required]],
      materia: ["", [Validators.required]],
    });
  }

  onSubmit() {
    if (this.nuevaTareaForm.valid) {
      console.log("Formulario válido");
    }
  }
}


