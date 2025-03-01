import { ToastrService } from 'ngx-toastr';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { CartService } from './../../core/services/cart/cart.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Data, ICartRoot, Product2 } from '../../shared/interfaces/iCart';
import { CartProductComponent } from '../../shared/components/cart-product/cart-product.component';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cart',
  imports: [CartProductComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly toastrService = inject(ToastrService);
  // cartRes: ICartRoot = {} as ICartRoot;
  cartData: Data = {} as Data;

  cartProducts: Product2[] = [];
  ngOnInit(): void {
    this.getCartData();
  }
  goCheckOut(cartId: string): void {
    if (this.cartData.totalCartPrice > 0) {
      this.router.navigate(['/checkout', cartId], {
        relativeTo: this.activatedRoute,
      });
    } else {
      this.toastrService.error("You Don't Have Product's in your Cart");
    }
    // [routerLink]="['/checkout', cartData._id]"
  }
  getCartData(): void {
    this.cartService.getLoggedCart().subscribe({
      next: (res) => {
        console.log(res);

        this.cartData = res.data;
        this.cartProducts = this.cartData.products;
        console.log(this.cartData);
      },
    });
  }
  updateCartData(res: ICartRoot): void {
    this.cartData = res.data;
    this.cartProducts = this.cartData.products;
  }
  callDeleteProduct(): void {
    this.cartService.clearAllCart().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.getCartData();
  }
  deleteAllProducts(): void {
    // Swal.fire({
    //   title: 'Error!',
    //   text: 'Do you want to continue',
    //   icon: 'error',
    //   confirmButtonText: 'Cool',
    // });
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
          this.callDeleteProduct();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
          });
        }
      });
  }
}
