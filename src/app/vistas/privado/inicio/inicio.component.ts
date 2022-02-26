import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "./../../../servicios/auth/auth.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.EstadoUsuario().subscribe(user => {
      if (!user) {
        this.router.navigate(['login']);
      }
    });
  }

}
