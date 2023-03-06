import { Component, Input, OnInit } from '@angular/core';

import { Country } from './../../interfaces/pais.interface';

@Component({
  selector: 'app-body-table',
  templateUrl: './body-table.component.html'
})
export class BodyTableComponent {
  @Input() paises:Country[] =[];

  constructor() {}

  OnInit():void {}

}
