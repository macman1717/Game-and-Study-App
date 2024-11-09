import { Component } from '@angular/core';
import { AuthService } from '../../services/api.auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  email = '';
  password = '';
  
  isForgotPassword: boolean = false;
  otpSent: boolean = false;
  otpVerified: boolean = false;
 
  constructor(private authService: AuthService, private router: Router) {}

  showForgotPasswordForm() {
    this.isForgotPassword = true;
  }

  onSigninSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        this.authService.setToken(this.email); 
        this.router.navigate(['sets']);
      },
      (error) => {
        console.log(error);
        alert('Invalid email or password');
      }
    );
  }
}
