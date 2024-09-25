import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Book } from '../models/book';
import { tap } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = '/api/books';
  private loginUrl = '/api/login';
  

  private bookAdded = new Subject<Book>();
  bookAdded$ = this.bookAdded.asObservable();

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}


  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { username, password }, this.httpOptions);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }


  addBook(book: Book): Observable<Book> {
    const userId = localStorage.getItem('userId');  
    if (userId) {
      this.httpOptions.headers = this.httpOptions.headers.set('userid', userId);  
    }
    return this.http.post<Book>(this.apiUrl, book, this.httpOptions);
  }


  updateBook(id: number, book: Book): Observable<Book> {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.httpOptions.headers = this.httpOptions.headers.set('userid', userId);
    }
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book, this.httpOptions);
  }


  deleteBook(id: number): Observable<Book> {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.httpOptions.headers = this.httpOptions.headers.set('userid', userId);
    }
    return this.http.delete<Book>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  notifyBookAdded(book: Book) {
    this.bookAdded.next(book);
  }

}
