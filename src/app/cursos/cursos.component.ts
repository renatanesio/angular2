import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent implements OnInit {

  nomePortal: string | undefined;
  cursos: string[];

  constructor(private cursosService:CursosService) {
    this.nomePortal = 'https://pll.harvard.edu/catalog/free'
  
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }
}
