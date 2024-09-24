import { Component, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-popular-books',
  templateUrl: './popular-books.component.html',
  styleUrls: ['./popular-books.component.css']
})
export class PopularBooksComponent {
  @Input() books: Book[] = [];
}
