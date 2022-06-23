import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  @Output() public newFilmEvent = new EventEmitter();

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {}

  addFilm() {
    this.filmService.addFilm({
      name: this.filmForm.controls.name.value,
      synopsis: this.filmForm.controls.synopsis.value,
      note: this.filmForm.controls.note.value,
    }).subscribe();
    this.filmForm.reset();
  }

  editFilm(id: number) {
    this.filmService.editFilm(id, {
      name: this.filmForm.controls.name.value,
      synopsis: this.filmForm.controls.synopsis.value,
      note: this.filmForm.controls.note.value
    }).subscribe();
  }
}
