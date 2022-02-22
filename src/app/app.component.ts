import { Component } from '@angular/core';
import { Firestore, collectionData, collection, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  item$: Observable<DocumentData[]>;
  constructor(firestore: Firestore) {
    const collectionFB = collection(firestore, 'tareas');
    this.item$ = collectionData(collectionFB);
  }

  ngOnInit() {
    this.item$.subscribe(item => {
      console.log(item);
    });
  }
}
