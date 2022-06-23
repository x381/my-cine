import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private _baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this._baseUrl}/films`);
  }

  addFilm(body: any): Observable<Film> {
    return this.http.post<Film>(`${this._baseUrl}/films`, body);
  }

  editFilm(id: number, body: any): Observable<Film> {
    return this.http.put<Film>(`${this._baseUrl}/films/${id}`, body);
  }
}
