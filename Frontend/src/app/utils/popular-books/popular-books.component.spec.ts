import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularBooksComponent } from './popular-books.component';

describe('PopularBooksComponent', () => {
  let component: PopularBooksComponent;
  let fixture: ComponentFixture<PopularBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularBooksComponent]
    });
    fixture = TestBed.createComponent(PopularBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
