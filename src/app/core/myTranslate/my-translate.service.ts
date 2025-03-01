import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
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
    @Inject(PLATFORM_ID) private id: object
  ) {
    if (isPlatformBrowser(id)) {
      // this.translateService.addLangs(['ar', 'en']);
      this.translateService.setDefaultLang('en');
      const savedLang = localStorage.getItem('lang');
      if (savedLang) {
        this.translateService.use(savedLang);
      }
    }
  }
}
