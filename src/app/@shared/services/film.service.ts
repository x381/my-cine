import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../models/film';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${environment.api}/films`);
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`${environment.api}/films/${id}`);
  }

  addFilm(body: any): Observable<Film> {
    return this.http.post<Film>(`${environment.api}/films`, body);
  }

  editFilm(id: number, body: any): Observable<Film> {
    return this.http.put<Film>(`${environment.api}/films/${id}`, body);
  }

  deleteFilm(id: number): Observable<Film> {
    return this.http.delete<Film>(`${environment.api}/films/${id}`);
  }
}
