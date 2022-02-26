import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  nuevaNotaForm!: FormGroup;
  enviado: boolean = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    
  }

  createForm() {
    this.nuevaNotaForm = this.fb.group({
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
