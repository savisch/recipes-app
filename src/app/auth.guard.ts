import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const authState = await inject(AuthService).isAuthenticated();
  if (authState) {
    return true;
  } else {
    router.navigate(['/not-authorized']);
  }
};

export const childAuthGuard: CanActivateChildFn = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const authState = await authGuard(route, state);
  if (authState) {
    return true;
  } else {
    router.navigate(['/not-authorized']);
  }
};
