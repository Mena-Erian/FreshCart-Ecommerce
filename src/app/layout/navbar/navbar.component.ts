import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  Signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFacebook } from '../../../../node_modules/@fortawesome/free-brands-svg-icons/faFacebook';
import { faTwitter } from '../../../../node_modules/@fortawesome/free-brands-svg-icons/faTwitter';
import { faInstagram } from '../../../../node_modules/@fortawesome/free-brands-svg-icons/faInstagram';
import { faTiktok } from '../../../../node_modules/@fortawesome/free-brands-svg-icons/faTiktok';
import { faYoutube } from '../../../../node_modules/@fortawesome/free-brands-svg-icons/faYoutube';
import { faLinkedin } from '../../../../node_modules/@fortawesome/free-brands-svg-icons/faLinkedin';
import { AuthService } from '../../core/services/auth/auth.service';
import { CartService } from '../../core/services/cart/cart.service';
// import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FaIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private readonly cartService = inject(CartService);
  numberOfCartItem: Signal<number> = computed(() => 0);
  ngOnInit(): void {
    this.getNumOfCartItem();
    // this.cartService.cartCounter.subscribe({
    //   next: (res) => {
    //     this.numberOfCartItem = res;
    //   },
    // });
    this.numberOfCartItem = computed<number>(() => this.getNumOfCartItem());
  }
  getNumOfCartItem(): number {
    this.cartService.getLoggedCart().subscribe();
    return this.cartService.cartCounter();
  }
  // isLogin:boolean=false;
  // @Input() isLogin:boolean=false;
  isLogin = input<boolean>(false);
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  public readonly authService = inject(AuthService);
}
