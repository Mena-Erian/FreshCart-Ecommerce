import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const islogedGuard: CanActivateFn = (route, state) => {
  const platformId = inject(PLATFORM_ID);
  const router = inject(Router);
  if (isPlatformBrowser(platformId)) {
    if (localStorage.getItem('token')) {
      router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
  return false;
};
