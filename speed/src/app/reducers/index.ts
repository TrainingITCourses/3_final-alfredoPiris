import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromBusqueda from './busqueda.reducer';

export interface State {

  busqueda: fromBusqueda.State;
}

export const reducers: ActionReducerMap<State> = {

  busqueda: fromBusqueda.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
