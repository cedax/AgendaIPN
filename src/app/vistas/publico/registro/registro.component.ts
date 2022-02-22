import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from "./../../../servicios/auth/auth.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup;
  claveRequerida: boolean = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.registroForm.get('passwordConfirm')?.valueChanges.subscribe(
      (value: string) => {
        this.claveRequerida = value.length > 0;
      }
    );

    this.auth.EstadoUsuario().subscribe(user => {
      if (user) {
        this.router.navigate(['inicio']);
      }
    });
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('passwordConfirm')?.value;
    return pass === confirmPass ? null : { passwordMatch: true }
  }

  createForm() {
    this.registroForm = this.fb.group({
      email: ["", [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ["", [Validators.required, Validators.minLength(6)]],
    }, { validators: this.checkPasswords });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      this.auth.crearUsuario(this.registroForm.value.email, this.registroForm.value.password).then(res => {
        if (res === 'auth/email-already-in-use') {
          this.registroForm.get('email')?.setErrors({ emailInUse: true });
        } else {
          this.registroForm.reset();
        }
      });
    }
  }
}
