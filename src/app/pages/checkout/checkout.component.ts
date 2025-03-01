import { ActivatedRoute } from '@angular/router';
import { OrdersService } from './../../core/services/orders/orders.service';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ICheckoutRoot } from '../../shared/interfaces/icheckout';

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
  private readonly ordersService = inject(OrdersService);
  private readonly activatedRoute = inject(ActivatedRoute);
  paramCartId: string = '';
  checkoutRes: ICheckoutRoot = {} as ICheckoutRoot;
  shippingAddressForm!: FormGroup;
  ngOnInit(): void {
    this.paramCartId = this.getParamCartId();
    this.initShippingForm();
  }
  initShippingForm(): void {
    this.shippingAddressForm = this.formBuilder.group({
      details: [null, Validators.required],
      phone: [
        null,
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
      ],
      city: [null, Validators.required],
    });
  }
  getParamCartId(): string {
    // this.activatedRoute.paramMap.subscribe({
    //   next: (res) => {
    //     console.log(res.get('cartId'));
    //   },
    // });
    const id = this.activatedRoute.snapshot.paramMap.get('cartId');
    return id || '';
  }
  submitForm() {
    if (this.shippingAddressForm.valid) {
      console.log(this.shippingAddressForm.value);
      this.ordersService
        .checkoutSession(this.paramCartId, this.shippingAddressForm.value)
        .subscribe({
          next: (res) => {
            this.checkoutRes = res;
            console.log(this.checkoutRes);
            if (this.checkoutRes.status === 'success') {
              open(this.checkoutRes.session.url, '_self');
            }
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }
}
