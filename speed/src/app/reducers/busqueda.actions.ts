import { Action } from '@ngrx/store';
import { Launch } from '../store/models/launch';

export enum BusquedaActionTypes {
  SearchAgencias = '[Busqueda] SearchAgencias',
  SearchMisiones = '[Busqueda] SearchMisiones',
  SearchEstados  = '[Busqueda] SearchEstados',
  DetalleVuelo  = '[Busqueda] DetalleVuelo',
  OrdenarMenor  = '[Busqueda] OrdenarMenor',
  OrdenarMayor  = '[Busqueda] OrdenarMayor',
  Save  = '[Busqueda] Save',
  Saved  = '[Busqueda] Saved',
  NotSaved  = '[Busqueda] NotSaved'
}

export class SearchAgencias implements Action {
  readonly type = BusquedaActionTypes.SearchAgencias;
  constructor(public payload: string) {}
}

export class SearchMisiones implements Action {
  readonly type = BusquedaActionTypes.SearchMisiones;
  constructor(public payload: string) {}
}

export class SearchEstados implements Action {
  readonly type = BusquedaActionTypes.SearchEstados;
  constructor(public payload: string) {}
}

export class DetalleVuelo implements Action {
  readonly type = BusquedaActionTypes.DetalleVuelo;
  constructor(public payload: Launch) {}
}

export class OrdenarMenor implements Action {
  readonly type = BusquedaActionTypes.OrdenarMenor;
  constructor(public payload: string) {}
}

export class OrdenarMayor implements Action {
  readonly type = BusquedaActionTypes.OrdenarMayor;
  constructor(public payload: string) {}
}

export class Save implements Action {
  readonly type = BusquedaActionTypes.Save;
  constructor(public payload: any) {}
}

export class Saved implements Action {
  readonly type = BusquedaActionTypes.Saved;
  constructor(readonly payload: any) {}
}

export class NotSaved implements Action {
  readonly type = BusquedaActionTypes.NotSaved;
  constructor(readonly payload: any) {}
}

export type BusquedaActions = SearchAgencias | SearchMisiones | SearchEstados | DetalleVuelo | OrdenarMenor | OrdenarMayor | Save | Saved | NotSaved;
