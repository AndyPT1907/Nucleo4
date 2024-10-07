import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  constructor( private https: HttpClient ) { }

  private api_Telefonos = 'http://localhost:3000/phones'

  //Traer todos los objetos

  getTelefonos  (): Observable <any> {
    return this.https.get(this.api_Telefonos);

  }
  getTelefonosID  (id:any): Observable <any> {
    return this.https.get(`${this.api_Telefonos}/${id}`);

  }
}
