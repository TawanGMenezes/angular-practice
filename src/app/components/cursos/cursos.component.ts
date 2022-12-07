import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  nomePortal: string;
  cursos: string[];

  constructor() {
    this.nomePortal = 'http://loiane.training';
    this.cursos = ['java', 'angular', 'python', 'c#', 'html'];
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
