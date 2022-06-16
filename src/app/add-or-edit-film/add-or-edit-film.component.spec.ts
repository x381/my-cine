import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditFilmComponent } from './add-or-edit-film.component';

describe('AddOrEditFilmComponent', () => {
  let component: AddOrEditFilmComponent;
  let fixture: ComponentFixture<AddOrEditFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrEditFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
