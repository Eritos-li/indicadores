import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MindicadorService {
  constructor(private http: HttpClient) {}

  getIndicadores2(id: string) {
    return this.http.get(`https://mindicador.cl/api/uf/${id}`);
  }
  
}
