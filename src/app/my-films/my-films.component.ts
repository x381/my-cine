import { Component, OnInit } from '@angular/core';
import { Film } from '../@shared/models/film';
import { FilmService } from '../@shared/services/film.service';

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.css'],
})
export class MyFilmsComponent implements OnInit {
  films: Film[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((res) => {
      this.films = res;
    });
  }
}
