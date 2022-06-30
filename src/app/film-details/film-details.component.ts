import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../@shared/models/film';
import { FilmService } from '../@shared/services/film.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
})
export class FilmDetailsComponent implements OnInit {
  film: Film;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const filmId = this.route.snapshot.paramMap.get('id');
    this.filmService
      .getFilm(Number(filmId))
      .subscribe((res) => (this.film = res));
  }

  deleteFilm(id: number) {
    this.filmService.deleteFilm(id).subscribe();
    this.router.navigate(['/my-films']);
  }
}
