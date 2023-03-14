import { Component } from '@angular/core';

import { Country } from './../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button {
    margin-right: 5px;
    margin-bottom: 5px;
  }
  `]
})
export class PorRegionComponent {
  regiones:string[][] = [["eu","Union Europea"], ["efta"," Asociación Europea de Libre Comercio"], ["caricom","Comunidad del Caribe"],["pa","Alianza del Pacífico"], ["au","Unión Africana"],["usan","Unión de Naciones Sudamericanas"], ["eeu","Unión Económica Euroasiática"], ["al","Liga Árabe"], ["asean","Asociación de Naciones del Sudeste Asiático"], ["cais","Sistema de la Integración Centroamericana"], ["cefta","Acuerdo Centroeuropeo de Libre Comercio"], ["nafta","Tratado de Libre Comercio de América del Norte"], ["saarc","Asociación del Asia Meridional para la Cooperación Regional"]];
  regionActiva:string = "";
  region:string = "";
  paises:Country[] = [];
  errorHttp:boolean = false;

  constructor(private paisService:PaisService) {}

  getClassCss(region:string):string {
    return  (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region:string) {
    this.regionActiva = region;
  }

  buscar(region:string) {
    this.errorHttp = false;
    this.region = region;
    this.paisService.buscarRegion(this.region)
        .subscribe((countries) => {
          this.paises = countries;
        }, (err) => {
          this.errorHttp = true;
          this.paises = [];
        });
  }
}
