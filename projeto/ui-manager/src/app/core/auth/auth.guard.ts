import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from './keycloak.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);

  try {
    const authenticated = await keycloak.init();
    return authenticated;
  } catch (error) {
    console.error('Erro de autenticação:', error);
    router.navigate(['/unauthorized']);
    return false;
  }
};

