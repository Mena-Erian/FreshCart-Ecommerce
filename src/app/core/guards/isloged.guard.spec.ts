import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { islogedGuard } from './isloged.guard';

describe('islogedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => islogedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
