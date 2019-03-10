import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaContainerComponent } from './busqueda-container/busqueda-container.component';
import { BusquedaAgenciasPresenterComponent } from './busqueda-agencias-presenter/busqueda-agencias-presenter.component';
import { ResultadoBusquedaAgenciasPresenterComponent } from './resultado-busqueda-agencias-presenter/resultado-busqueda-agencias-presenter.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BusquedaEffects } from './reducers/busqueda.effects';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    BusquedaContainerComponent,
    BusquedaAgenciasPresenterComponent,
    ResultadoBusquedaAgenciasPresenterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([BusquedaEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
