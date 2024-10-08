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
        this.toastr.success('<i class="fas fa-check-circle fa-icon"></i> Login Successful', '', {
          enableHtml: true});
        this.router.navigate(['/books']);  
      },
      error: (error) => {
        console.error(error); 
        this.toastr.error('<i class="fas fa-times-circle fa-icon"></i> Invalid Credentials', '', {
          enableHtml: true
        });
      },
    });
  }
}