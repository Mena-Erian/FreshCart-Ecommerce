import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import {
  TranslateDirective,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class MyTranslateService {
  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private id: object,
    private renderer2: Renderer2,
    private rendererFactory2: RendererFactory2
  ) {
    if (isPlatformBrowser(id)) {
      // this.translateService.addLangs(['ar', 'en']);
      this.translateService.setDefaultLang('en');
      const savedLang = localStorage.getItem('lang');
      if (savedLang) {
        this.translateService.use(savedLang);
      }
    }
    renderer2 = rendererFactory2.createRenderer(null, null);
  }
  changeDirection(): void {
    if (localStorage.getItem('lang') === 'en') {
      this.renderer2.setAttribute(document.documentElement, 'dir', 'ltr');
      this.renderer2.setAttribute(document.documentElement, 'lang', 'en');
    } else if (localStorage.getItem('lang') === 'ar') {
      this.renderer2.setAttribute(document.documentElement, 'dir', 'rtl');
      this.renderer2.setAttribute(document.documentElement, 'lang', 'ar');
    }
  }
}
