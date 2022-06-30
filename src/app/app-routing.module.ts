import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFilmsComponent } from './my-films/my-films.component';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { FilmDetailsComponent } from './film-details/film-details.component';

const routes: Routes = [
  { path: 'my-films', component: MyFilmsComponent },
  { path: '', redirectTo: '/my-films', pathMatch: 'full' },
  { path: 'film/:id', component: FilmDetailsComponent },
  { path: 'add-film', component: AddOrEditFilmComponent },
  { path: 'edit-film/:id', component: AddOrEditFilmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
