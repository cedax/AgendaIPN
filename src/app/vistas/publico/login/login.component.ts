import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from "./../../../servicios/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  enviado: boolean = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.auth.EstadoUsuario().subscribe(user => {
      if (user) {
        this.router.navigate(['inicio']);
      }
    });
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.enviado = true;
    if (this.loginForm.valid) {
      this.auth.logearUsuario(this.loginForm.value.email, this.loginForm.value.password).then(res => {
        if (res === 'auth/user-not-found') {
          this.loginForm.get('email')?.setErrors({ userNotFound: true });
        } else if (res === 'auth/wrong-password') {
          this.loginForm.get('password')?.setErrors({ wrongPassword: true });
        }
      });
    }
  }
}
