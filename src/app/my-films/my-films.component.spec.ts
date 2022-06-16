import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFilmsComponent } from './my-films.component';

describe('MyFilmsComponent', () => {
  let component: MyFilmsComponent;
  let fixture: ComponentFixture<MyFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
