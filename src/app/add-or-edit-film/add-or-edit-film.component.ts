import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../@shared/services/film.service';

@Component({
  selector: 'app-add-or-edit-film',
  templateUrl: './add-or-edit-film.component.html',
  styleUrls: ['./add-or-edit-film.component.css'],
})
export class AddOrEditFilmComponent implements OnInit {
  filmForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    synopsis: new FormControl(''),
    note: new FormControl(null, [Validators.min(0), Validators.max(5)]),
  });
  button: string;
  selectedId: number;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== null) {
      const selectedId: number = Number(this.route.snapshot.paramMap.get('id'));
      this.filmService.getFilm(selectedId).subscribe((res) => {
        this.filmForm.setValue({
          name: res.name,
          synopsis: res.synopsis,
          note: null,
        });
        this.button = 'Modifier';
        this.selectedId = Number(res.id);
      });
    } else {
      this.button = 'Ajouter';
    }
  }

  addOrEditFilm() {
    if (this.button == 'Modifier') {
      this.filmService
        .editFilm(this.selectedId, {
          name: this.filmForm.controls.name.value,
          synopsis: this.filmForm.controls.synopsis.value,
          note: this.filmForm.controls.note.value,
        })
        .subscribe();
      console.log(this.router.navigate(['/film', this.selectedId]));
    } else {
      this.filmService
        .addFilm({
          name: this.filmForm.controls.name.value,
          synopsis: this.filmForm.controls.synopsis.value,
          note: this.filmForm.controls.note.value,
        })
        .subscribe();
      this.router.navigate(['/my-films']);
    }
  }
}
