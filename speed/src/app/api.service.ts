import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = environment.apiUrl + 'pub/items';

  constructor(private http: HttpClient) {
  }
  postBusqueda$ = busqueda => this.http.post(this.url, busqueda);
  getBusqueda$ = busquedaId => this.http.get(this.url + '/' + busquedaId);
}
