import { Component } from '@angular/core';

import { Country } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class PorPaisComponent {
  termino:string = "";
  paises:Country[] = [];
  paisesSugeridos:Country[] = [];
  errorHttp:boolean = false;
  mostrarSugerencia:boolean = false;

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
    this.termino = termino;
    this.mostrarSugerencia = true;
    this.paisService.buscarPais( termino )
      .subscribe( paises => this.paisesSugeridos = paises.splice(0,5)),
      (err:any) => this.paisesSugeridos = [];
  }

  buscarSugerido(termino:string) {
    this.buscar(termino);
    this.mostrarSugerencia = false;
  }
}
