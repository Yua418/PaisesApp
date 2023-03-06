import { Component } from '@angular/core';

import { Country } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {
  termino:string = "";
  paises:Country[] = [];
  errorHttp:boolean = false;

  constructor(private paisService:PaisService) {}

  buscar(termino:string) {
    this.errorHttp = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
      .subscribe((countries) => {
        this.paises = countries;
      }, (err) => {
        this.errorHttp = true;
        this.paises = [];
      });
    this.termino = "";
  }

  sugerencias(termino:string) {
    this.errorHttp = false;
    // implementar sugerencias
  }
}
