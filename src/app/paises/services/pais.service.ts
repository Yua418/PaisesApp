import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from './../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  regiones:string[] = [];
  field:string = "name,capital,alpha2code,population,region,flag,translation";

  private apiUrl:string = "https://restcountries.com/v2/";
  constructor(private http:HttpClient) { }
  buscarPais(termino:string):Observable<Country[]> {
    const url:string = `${this.apiUrl}/name/${ termino }`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string):Observable<Country[]> {
    const url:string = `${this.apiUrl}/capital/${ termino }`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(region:string):Observable<Country[]> {
    const url:string = `${this.apiUrl}/regionalbloc/${ region }`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisCodigo(id:string):Observable<Country> {
    const url:string = `${this.apiUrl}/alpha/${ id }`;
    return this.http.get<Country>(url);
  }
}
