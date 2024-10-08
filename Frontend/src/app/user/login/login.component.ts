import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) {} 

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login successful');
        this.router.navigate(['/books']);  
      },
      error: (error) => {
        console.error(error); 
        this.toastr.error(this.errorMessage, 'Error: Invalid Credentials');
      },
    });
  }
}