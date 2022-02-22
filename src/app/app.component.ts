import { Component } from '@angular/core';
import { Firestore, collectionData, collection, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from "./servicios/auth/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usuarioLoggeado: boolean = false;

  item$: Observable<DocumentData[]>;
  constructor(private firestore: Firestore, private auth: AuthService, private router: Router) {
    const collectionFB = collection(firestore, 'tareas');
    this.item$ = collectionData(collectionFB);
  }

  ngOnInit() {
    this.item$.subscribe(item => {
      //console.log(item);
    });

    this.auth.EstadoUsuario().subscribe(user => {
      if (user) {
        this.usuarioLoggeado = true;
      }else {
        this.usuarioLoggeado = false;
      }
    });
  }
}
