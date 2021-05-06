import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  API_URI='http://localhost:3000';
  constructor(private http: HttpClient) { }

  getPublicaciones(){
      return this.http.get(`${this.API_URI}/posts`);
  }
}
