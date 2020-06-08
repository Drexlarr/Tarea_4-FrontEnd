import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { Categoria } from './model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private urlBase = "http://localhost:8762/categoria";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  obtenerCategoria() : Observable<any>{
    return this.http.get(this.urlBase + "/obtener").pipe(
      map(response => response as Categoria[])
    )
  }
}
