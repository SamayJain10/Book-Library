import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'; 
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  totalBooks: number = 0;
  totalUsers: number = 0;
  popularBooks: Book[] = [];
  newUser = { name: '', age: 0, phone: '', email: '', address: '', username: '', password: '' };
 

  constructor(private bookService: BookService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchBookData();
    this.fetchPopularBooks();
    this.fetchTotalUsers();
  }

  fetchBookData(): void {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.totalBooks = books.length;
    });
  }

  fetchPopularBooks(): void {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.popularBooks = books
        .sort((a, b) => b.rating - a.rating) 
        .slice(0, 10); 
    });
  }

  fetchTotalUsers(): void {
    this.userService.getUsers().subscribe((users: any[]) => {
      this.totalUsers = users.length; 
    });
  }

  addUser(): void {
    this.userService.addUser(this.newUser).subscribe((user: any) => {
      console.log('User added:', user);
      this.fetchTotalUsers(); 
      this.newUser = { name: '', age: 0, phone: '', email: '', address: '', username: '', password: '' }; 
    });
  }

  goBack(): void {
    this.router.navigate(['/books']);  
  }
}
