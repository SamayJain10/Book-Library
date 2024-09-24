import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private bookService: BookService, private router: Router) { }

  login(): void {
    this.bookService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful:', response);
        localStorage.setItem('userId', response.userId);
        this.router.navigate(['/books']);
      },
      error => {
        console.error('Login failed:', error);
        this.errorMessage = 'Invalid credentials';
      }
    );
  }
}
