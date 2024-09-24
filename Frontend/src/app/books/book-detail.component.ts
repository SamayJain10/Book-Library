import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: 'book-detail.component.html'
})
export class BookDetailComponent implements OnChanges {
  @Input() book!: Book;  
  @Output() delete = new EventEmitter<Book>();  
  @Output() update = new EventEmitter<Book>();  

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['book']) {
      console.log('Book has changed:', changes['book'].currentValue);  
    }
  }

  deleteBook(): void {
    this.delete.emit(this.book);
  }

  updateBook(): void {
    this.update.emit({...this.book, title: this.book.title + " (Updated)"});
  }
}
