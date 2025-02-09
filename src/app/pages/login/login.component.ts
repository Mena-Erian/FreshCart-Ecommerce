import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from './../../core/services/auth/auth.service';
import { Component, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  msgError: string = '';
  msgSuccess: string = '';
  isLoading: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[\w\.\*\+\?\^\$\(\)\[\]\{\}\|\!\@\#\%\&\~\W*]{6,}$/),
    ]),
  });
  submitLogin() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.authService.logIn(this.loginForm.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.msgError = '';
          this.msgSuccess = res.message;
          console.log(res);
          if (res.message === 'success') {
            localStorage.setItem('token', res?.token);
            this.authService.saveUserData();
            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 1000);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          console.log(err);
          this.msgError = err.error.message;
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
