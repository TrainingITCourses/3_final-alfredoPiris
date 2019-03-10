import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Launch } from '../store/models/launch';

@Component({
  selector: 'app-resultado-busqueda-agencias-presenter',
  templateUrl: './resultado-busqueda-agencias-presenter.component.html',
  styleUrls: ['./resultado-busqueda-agencias-presenter.component.css']
})
export class ResultadoBusquedaAgenciasPresenterComponent implements OnInit {
  @Input() public launches: Launch[];
  @Output() public busquedaV = new EventEmitter();
  @Output() public eventOrdenarMenor = new EventEmitter();
  @Output() public eventOrdenarMayor = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public busquedaVuelo (event: any) {
    this.busquedaV.next(event);
  }

  onClickOrdenarMenor (launches: Launch[]) {
    this.eventOrdenarMenor.next(launches);
  }

  onClickOrdenarMayor (launches: Launch[]) {
    this.eventOrdenarMayor.next(launches);
  }



  esDetalle() {
    if (this.launches.length === 1) {
      return true;
    } else {
      return false;
    }
  }

  esPrimeraCarga() {
    if (this.launches.length === 0) {
      return true;
    } else {
      return false;
    }
  }

}
