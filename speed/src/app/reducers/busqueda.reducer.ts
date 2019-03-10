import { Action } from '@ngrx/store';
import { BusquedaActions, BusquedaActionTypes } from './busqueda.actions';
import launchesJson from '../../assets/data/launches.json';



export interface State {
  launches: any[];
  _id?: String;
  message?: String;
}

export const initialState: State = {
  launches: [],
  _id: '',
  message: ''
};

export function reducer(state = initialState, action: BusquedaActions): State {
  state.launches = [];
  switch (action.type) {
    case BusquedaActionTypes.SearchAgencias:
      break;

    case BusquedaActionTypes.OrdenarMenor:
      state.launches = [];
      for (let i = 0; i < action.payload.length; i++) {
        if (state.launches.length === 0) {
          state.launches.push(action.payload[i]);
        }else{
          for (let j = 0; j < state.launches.length; j++){
            if (action.payload[i].windowstart >= state.launches[j].windowstart) {
              if (j === (state.launches.length-1)) {
                state.launches.push(action.payload[i]);
                j = state.launches.length;
              }
            } else {
                state.launches.splice(j, 0, action.payload[i]);
                j = state.launches.length;
            }
          }
        }
      }
      return {...state};

    case BusquedaActionTypes.OrdenarMayor:
      state.launches = [];

      for (let i = 0; i < action.payload.length; i++) {
        if (state.launches.length === 0) {
          state.launches.push(action.payload[i]);
        }else{
          for (let j = 0; j < state.launches.length; j++){
            if (action.payload[i].windowstart <= state.launches[j].windowstart) {
              if (j === (state.launches.length-1)) {
                state.launches.push(action.payload[i]);
                j = state.launches.length;
              }
            } else {
                state.launches.splice(j, 0, action.payload[i]);
                j = state.launches.length;
            }
          }
        }
      }
      return {...state};

    case BusquedaActionTypes.SearchEstados:
      for (let i = 0; i < launchesJson.launches.length; i++) {
        if (launchesJson.launches[i].missions != null && launchesJson.launches[i].missions.length > 0) {
          if (launchesJson.launches[i].missions[0].type === parseInt(action.payload, 10)) {
            state.launches.push(launchesJson.launches[i]);
          }
        }
      }
      return {...state};
      break;

    case BusquedaActionTypes.DetalleVuelo:
      state.launches = [];
      for (let i = 0; i < launchesJson.count; i++) {
        if (launchesJson.launches[i].id === action.payload.id) {
          state.launches.push(launchesJson.launches[i]);
        }
      }
    return {...state};

    case BusquedaActionTypes.SearchMisiones:
      return {...state};
    break;

    case BusquedaActionTypes.Save:
      return state;
    break;

    case BusquedaActionTypes.Saved:
      return action.payload;
    break;

    case BusquedaActionTypes.NotSaved:
      return {...state, message: action.payload};
    break;

    default:
      return state;
  }
}
