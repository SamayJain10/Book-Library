import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  bookForm: FormGroup;
  selectedBook: Book | null = null; 
  book: any;

  constructor(
    private bookService: BookService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      console.log('Books fetched:', data); 
      this.books = data;
      this.toastr.success('Books fetched successfully', 'Success');
      this.filteredBooks = data;
    });
  }

  onSortChange(event: Event): void {
    const sortValue = (event.target as HTMLSelectElement).value;

    switch (sortValue) {
      case 'alphabetical':
        this.filteredBooks = this.books.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'reverse-alphabetical':
        this.filteredBooks = this.books.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'rating-high-to-low':
        this.filteredBooks = this.books.sort((a, b) => b.rating - a.rating);
        break;
      case 'rating-low-to-high':
        this.filteredBooks = this.books.sort((a, b) => a.rating - b.rating);
        break;
      default:
        this.filteredBooks = this.books;
        break;
    }
  }

  filterBooks(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genre.toLowerCase().includes(query)
    );
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook = this.bookForm.value as Book;
      this.bookService.addBook(newBook).subscribe((addedBook) => {
        this.books.push(addedBook);
        this.filteredBooks.push(addedBook);
        this.bookForm.reset();
      });
    }
  }

  deleteBook(book: Book): void {
    this.bookService.deleteBook(book.id).subscribe(() => {
      this.books = this.books.filter(b => b.id !== book.id);
      this.filteredBooks = this.filteredBooks.filter(b => b.id !== book.id);
      this.selectedBook = null;
    });
  }

  selectBook(book: Book): void {
    console.log('Selected book:', book);
    this.selectedBook = book;
  }

  updateBook(book: Book): void {
    const updatedBook = { ...book, title: book.title + " (Updated)" };
    this.bookService.updateBook(book.id, updatedBook).subscribe((res) => {
      const index = this.books.findIndex(b => b.id === book.id);
      if (index !== -1) {
        this.books[index] = res;
        this.filteredBooks[index] = res;
      }
    });
  }
}