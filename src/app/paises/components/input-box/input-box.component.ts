import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html'
})
export class InputBoxComponent {
  @Output() onEnter:EventEmitter<string> = new EventEmitter;
  termino:string = "";

  buscar() {
    this.onEnter.emit(this.termino);
    this.termino = "";
  }
}
