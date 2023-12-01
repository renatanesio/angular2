import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      'CS50\'s Introduction to Game Development',
      'CS50\'s Introduction to Artificial Intelligence with Python',
      'CS50\'s Introduction to Programming with Scratch'
    ];
  }
}
