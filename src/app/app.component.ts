import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-cine';
  films: any[] = [];

  addFilm(newFilm: Object) {
    this.films.push(newFilm);
  }
}
