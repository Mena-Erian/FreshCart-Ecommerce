import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
})
export class ForgetPasswordComponent {
  private readonly formBuilder = inject(FormBuilder);
  isLoading: boolean = false;
  getEmailForm: FormGroup = new FormGroup(
    {
      emil: new FormControl(null, [Validators.required, Validators.email]),
    },
    { updateOn: 'blur' }
  );
  subumitGetEmailForm() {
    console.log(this.getEmailForm, this.getEmailForm.invalid);
  }
  verifyCode: FormGroup = this.formBuilder.group({
    resetCode: [
      null,
      [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
    ],
  });
  resetPassword: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    newPassword: [
      null,
      [Validators.required, Validators.pattern(/^[/w/W*]{7,}$/)],
    ],
  });
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
