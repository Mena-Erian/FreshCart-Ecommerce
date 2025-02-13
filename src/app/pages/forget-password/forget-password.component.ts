import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../core/services/auth/auth.service';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
})
export class ForgetPasswordComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  step: number = 1;
  isLoading: boolean = false;
  msgError: string = '';
  msgSuccess: string = '';
  getEmailForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });
  subumitGetEmailForm() {
    let emailValue: string = '';
    if (this.getEmailForm.valid) {
      // this.authService.setDefaultEmail(
      //   this.getEmailForm.controls['email'].value
      // );
      emailValue = this.getEmailForm.get('email')?.value;
      this.resetPassword.get('email')?.patchValue(emailValue);
      this.isLoading = true;
      this.authService.setEmailVerfiy(this.getEmailForm.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          console.log(res);
          this.msgError = '';
          this.msgSuccess = res.message;
          setTimeout(() => {
            if (res.statusMsg === 'success') {
              this.step = 2;
              this.msgSuccess = '';
            }
          }, 1000);
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          console.log(err);
          this.msgError = err.error.message;
        },
      });
    }
  }

  verifyCode: FormGroup = this.formBuilder.group({
    resetCode: [
      null,
      [Validators.required, Validators.pattern(/^[/w0-9]{3,}$/)],
    ],
  });
  submitVerifyCode(): void {
    if (this.verifyCode.valid) {
      this.isLoading = true;
      this.authService.setCodeVerfiy(this.verifyCode.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.msgError = '';
          console.log(res);
          this.msgSuccess = res.status;
          setTimeout(() => {
            if (res.status === 'Success') {
              this.step = 3;
              this.msgSuccess = '';
            }
          }, 2000);
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          console.log(err);
          this.msgError = err.error.message;
        },
      });
    }
  }
  resetPassword: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    newPassword: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^[\w\.\*\+\?\^\$\(\)\[\]\{\}\|\!\@\#\%\&\~\W*]{7,}$/
        ),
      ],
    ],
  });
  submitSetNewPassword(): void {
    if (this.resetPassword.valid) {
      this.isLoading = true;
      this.authService.setResetPassword(this.resetPassword.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.msgError = '';
          console.log(res);
          this.msgSuccess = res.message;
          localStorage.setItem('token', res.token);
          console.log(localStorage);
          this.authService.saveUserData();
          setTimeout(() => {
            this.router.navigate(['/home']);
            this.msgSuccess = '';
          }, 1000);
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          console.log(err);
          this.msgError = err.error.message;
        },
      });
    }
  }
}
// registerForm: FormGroup = this.formBuilder.group({
//   name: [
//     null,
//     [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
//   ],
//   email: [null, [Validators.email, Validators.required]],
//   password: [
//     null,
//     [
//       Validators.required,
//       Validators.pattern(
//         /^[\w\.\*\+\?\^\$\(\)\[\]\{\}\|\!\@\#\%\&\~\W*]{7,}$/
//       ),
//     ],
//   ],
//   rePassword: [null, [Validators.required]],
//   phone: [
//     null,
//     [Validators.required, Validators.pattern(/^(\+2)?01[0125][0-9]{8}$/)],
//   ],
// });
