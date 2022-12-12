import { Component } from '@angular/core';

@Component({
  selector: 'app-firts',
  templateUrl: './firts.component.html',
  styleUrls: ['./firts.component.css'],
})
export class FirtsComponent {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImg: string = 'http://lorempixel.com.br/400/200/nature';
  valor: string = ''
  novo: string = ''
  isMouseOver: boolean = false
  constructor() { }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  clicked() {
    alert('CLICOU')
  }

  valorAtual(event: KeyboardEvent) {
    this.valor = (<HTMLInputElement>event.target).value
  }

  valorNovo(valor: string) {
    this.novo = valor
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }
}
