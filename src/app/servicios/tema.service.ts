import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  constructor() {
    this.theme = localStorage.getItem('tema');
  }

  get theme(): any {
    return document.documentElement.getAttribute('theme');
  }

  set theme(name: any) {
    localStorage.setItem('tema', name);
    document.documentElement.setAttribute('theme', name);
  }
}