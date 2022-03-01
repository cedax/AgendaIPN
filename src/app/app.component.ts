import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AuthService } from "./servicios/auth/auth.service";
import { TemaService } from './servicios/tema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usuarioLoggeado: boolean = false;
  
  get dark() { return this.temaServicio.theme === 'dark'; }

  set dark(enabled: boolean) { this.temaServicio.theme = enabled ? 'dark' : null; }

  constructor(private temaServicio: TemaService, private firestore: Firestore, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.EstadoUsuario().subscribe(user => {
      user ? this.usuarioLoggeado = true : this.usuarioLoggeado = false;
    });
  }

  cerrarSesion(): void {
    this.auth.cerrarSesion();
  }
}