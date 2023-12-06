import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
  // outputs: ['mudouValor']

})

export class DataBindingComponent implements OnInit {

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = "Angular";
  valorInicial = 15;

  onMudouValor(evento: { novoValor: number; }) {
    console.log(evento.novoValor);
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(data: string) {
    this.valorSalvo = data;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor(
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
