import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ACCESS_TOKEN } from '../../Shared/constants/constants';

export const authGuard: CanActivateFn = (route, state) => {
  const routerService = inject(Router);
  const loggedInUserToken = localStorage.getItem(ACCESS_TOKEN);
  if (loggedInUserToken != null){
    return true;
  } else {
    routerService.navigateByUrl('login');
    return false;
  }
};
