import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service'; 

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.css']
})
export class BookGridComponent implements OnInit {
  books: any[] = [];
  columnDefs = [
    { headerName: 'Title', field: 'title', sortable: true, filter: true },
    { headerName: 'Author', field: 'author', sortable: true, filter: true },
    { headerName: 'Genre', field: 'genre', sortable: true, filter: true },
    { headerName: 'Rating', field: 'rating', sortable: true, filter: true }
  ];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: any[]) => {
      this.books = data;
    });
  }
}
