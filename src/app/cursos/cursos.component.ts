import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent implements OnInit {

  nomePortal: string | undefined;
  cursos: string[] = [
    'CS50\'s Introduction to Game Development',
    'CS50\'s Introduction to Artificial Intelligence with Python',
    'CS50\'s Introduction to Programming with Scratch'
  ]

  constructor() {
    this.nomePortal = 'https://pll.harvard.edu/catalog/free'
  }

  ngOnInit(): void {
  }
}
