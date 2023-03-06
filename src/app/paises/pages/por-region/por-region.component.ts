import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {
  termino:string = "";
  paises:Country[] = [];
  errorHttp:boolean = false;

  constructor(private paisService:PaisService) {}

  buscar(termino:string) {
    this.errorHttp = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
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
