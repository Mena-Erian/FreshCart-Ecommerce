import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ViwportService {
  private widthSubject = new BehaviorSubject<number>(0);
  width$ = this.widthSubject.asObservable();
  constructor(@Inject(PLATFORM_ID) platformId: any) {
    if (isPlatformBrowser(platformId)) {
      this.widthSubject.next(window.innerWidth);

      const resizeObserver = new ResizeObserver(() => {
        this.widthSubject.next(window.innerWidth);
      });
      resizeObserver.observe(document.body);
    }
  }
}
