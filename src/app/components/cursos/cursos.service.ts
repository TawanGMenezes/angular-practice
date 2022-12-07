import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}

  getCursos() {
    return ['java', 'angular', 'python', 'c#', 'html'];
  }
}
