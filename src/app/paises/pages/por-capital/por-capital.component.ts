import { Component, Input } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [`
  li {
    cursor: pointer;
  }
`]
})
export class PorCapitalComponent {
  termino:string = "";
  paises:Country[] = [];
  errorHttp:boolean = false;
  paisesSugeridos:Country[] = [];
  mostrarSugerencia:boolean = false;

  constructor(private paisService:PaisService) {}

  buscar(termino:string) {
    this.errorHttp = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
      .subscribe(countries => this.paises = countries,
      (err) => {
        console.log(err);
        this.errorHttp = true;
        this.paises = [];
      });
    this.termino = "";
  }

  sugerencias(termino:string) {
    this.errorHttp = false;
    this.termino = termino;
    this.mostrarSugerencia = true;
    this.paisService.buscarCapital( termino )
      .subscribe( paises => this.paisesSugeridos = paises.splice(0,5)),
      (err:any) => this.paisesSugeridos = [];
  }

  buscarSugerido(termino:string) {
    this.buscar(termino);
    this.mostrarSugerencia = false;
  }
}
