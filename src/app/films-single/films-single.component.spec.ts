import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsSingleComponent } from './films-single.component';

describe('FilmsSingleComponent', () => {
  let component: FilmsSingleComponent;
  let fixture: ComponentFixture<FilmsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
