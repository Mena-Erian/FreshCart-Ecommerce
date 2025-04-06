import { Component, HostListener } from '@angular/core';
import { RouterOutlet, Scroll } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-blank-layout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss',
})
export class BlankLayoutComponent {
  goToTop(): void {
    window.scrollTo(0, 0);
    window.scroll({
      behavior: 'smooth',
    });
    console.log(window.scrollY);
  }
  showBtn: boolean = false;
  @HostListener('window:scroll') scrollToTop(event: any) {
    let scrollTop: number = document.documentElement.scrollTop;
    // console.log(scrollTop);
    if (scrollTop > 100) {
      this.showBtn = true;
    } else {
      this.showBtn = false;
    }
  }
}
