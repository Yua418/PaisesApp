import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html'
})
export class InputBoxComponent implements OnInit {
  @Output() onEnter:EventEmitter<string> = new EventEmitter;
  @Output() onDebounce:EventEmitter<string> = new EventEmitter;

  @Input() placeholder:string = "";

  debouncer:Subject<string> = new Subject();

  termino:string = "";

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe( valor => {
        this.onDebounce.emit( valor );
      });
  }

  buscar() {
    this.onEnter.emit(this.termino);
    this.termino = "";
  }

  teclaPrecionada () {
    this.debouncer.next( this.termino );
  }

}
