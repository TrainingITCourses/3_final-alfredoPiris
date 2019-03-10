import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BusquedaActionTypes, NotSaved,  Save,  Saved } from './busqueda.actions';
import { ApiService } from '../api.service';



@Injectable()
export class BusquedaEffects {

  @Effect()
  public save$ = this.actions$.pipe(ofType(BusquedaActionTypes.Save), mergeMap((action: Save) =>
        this.api.postBusqueda$(action.payload).pipe(
      map (busqueda => new Saved(busqueda)),
       catchError (err => of(new NotSaved(err.message)))))
    );
  constructor(private actions$: Actions, private api: ApiService) {
    this.save$.subscribe();
  }
}
