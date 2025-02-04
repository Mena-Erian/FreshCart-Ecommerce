import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFacebook } from '../../../../node_modules/@fortawesome/free-brands-svg-icons/faFacebook';
import { faTwitter } from '../../../../node_modules/@fortawesome/free-brands-svg-icons/faTwitter';
import { faInstagram } from '../../../../node_modules/@fortawesome/free-brands-svg-icons/faInstagram';
import { faTiktok } from '../../../../node_modules/@fortawesome/free-brands-svg-icons/faTiktok';
import { faYoutube } from '../../../../node_modules/@fortawesome/free-brands-svg-icons/faYoutube';
import { faLinkedin } from '../../../../node_modules/@fortawesome/free-brands-svg-icons/faLinkedin';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FaIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  // isLogin:boolean=false;
  // @Input() isLogin:boolean=false;
  isLogin = input<boolean>(false);
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
}
