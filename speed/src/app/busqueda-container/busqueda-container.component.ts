import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers/busqueda.reducer';
import { SearchAgencias, SearchMisiones, SearchEstados,DetalleVuelo, OrdenarMayor, OrdenarMenor, Save} from '../reducers/busqueda.actions';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { Launch } from '../store/models/launch';


@Component({
  selector: 'app-busqueda-container',
  templateUrl: './busqueda-container.component.html',
  styleUrls: ['./busqueda-container.component.css']
})
export class BusquedaContainerComponent implements OnInit {
  public launches: any[];
  constructor(private store: Store<State>, swUpdate: SwUpdate) {
    if (swUpdate.isEnabled){
      swUpdate.available.subscribe(
        (event: UpdateAvailableEvent) => {
          const msg =
            'Hay una nueva versión disponible, ¿desea descargarla? Se recomienda.';
          if (confirm(msg)) { window.location.reload(); }
        }
      );
    }
  }

  ngOnInit() {
    this.store.select('busqueda').subscribe(value => (this.launches = value.launches));
  }

  onBusquedaAgencias = (busqueda: any) => {
    this.store.dispatch(new SearchAgencias(busqueda));
  }

  onBusquedaMisiones = (busqueda: any) => {
    this.store.dispatch(new SearchMisiones(busqueda));
  }

  onBusquedaEstados = (busqueda: any) => {
    this.store.dispatch(new SearchEstados(busqueda));
  }

  onBusquedaVuelo = (launch: Launch) => {
    this.store.dispatch(new DetalleVuelo(launch));
  }

  onClickOrdenarMenor(launches: Launch[]) {
    this.store.dispatch(new OrdenarMenor(launches));
  }

  onClickOrdenarMayor(launches: Launch[]) {
    this.store.dispatch(new OrdenarMayor(launches));
  }

  onSave = () => this.store.dispatch(new Save(this.launches));
}
