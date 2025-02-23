import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit {
  isLoading: boolean = false;
  msgSuccess: string = '';
  msgError: string = '';
  private readonly formBuilder = inject(FormBuilder);
  shippingAddressForm!: FormGroup;
  ngOnInit(): void {
    this.shippingAddressForm = this.formBuilder.group({
      details: [null, Validators.required],
      phone: [
        null,
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
      ],
      city: [null, Validators.required],
    });
  }
  submitForm() {
    console.log(this.shippingAddressForm.value);
  }
}
