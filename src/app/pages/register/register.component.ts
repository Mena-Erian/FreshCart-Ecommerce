import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private readonly formBuilder = inject(FormBuilder);

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  isLoading: boolean = false;
  msgError: string = '';
  msgSuccess: string = '';
  // registerForm: FormGroup = new FormGroup(
  //   {
  //     name: new FormControl(null, [
  //       Validators.required,
  //       Validators.minLength(6),
  //       Validators.maxLength(20),
  //     ]),
  //     email: new FormControl(null, [Validators.email, Validators.required]),
  //     password: new FormControl(null, [
  //       Validators.required,
  //       Validators.pattern(
  //         /^[\w\.\*\+\?\^\$\(\)\[\]\{\}\|\!\@\#\%\&\~\W*]{7,}$/
  //       ),
  //     ]),
  //     rePassword: new FormControl(null, [Validators.required]),
  //     phone: new FormControl(null, [
  //       Validators.required,
  //       Validators.pattern(/^(\+2)?01[0125][0-9]{8}$/),
  //     ]),
  //   },
  //   { updateOn: 'blur', validators: this.confirmPassword }
  // );

  registerForm: FormGroup = this.formBuilder.group({
    name: [
      null,
      [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
    ],
    email: [null, [Validators.email, Validators.required]],
    password: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^[\w\.\*\+\?\^\$\(\)\[\]\{\}\|\!\@\#\%\&\~\W*]{7,}$/
        ),
      ],
    ],
    rePassword: [null, [Validators.required]],
    phone: [
      null,
      [Validators.required, Validators.pattern(/^(\+2)?01[0125][0-9]{8}$/)],
    ],
  });
  submitForm() {
    // console.log(this.registerForm);
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.authService.signIn(this.registerForm.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.msgError = '';
          this.msgSuccess = res.message;
          console.log(res);
          if (res.message === 'success') {
            //navigate path login or home
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 1000);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          this.msgError = err.error.message;
          console.log(err);
          //show message to user
        },
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  confirmPassword(group: AbstractControl) {
    const password = group.get('password')?.value;
    const rePassword = group.get('rePassword')?.value;
    return password === rePassword ? null : { mismatch: true };
  }
}
//@rxweb/reactive-form-validators//library from npm
