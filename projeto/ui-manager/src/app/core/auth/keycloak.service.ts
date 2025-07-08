import Keycloak from 'keycloak-js';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class KeycloakService {
  private keycloak: Keycloak = new Keycloak({
    url: 'http://localhost:8080/',
    realm: 'academico-realm',
    clientId: 'admin-api',
  });

  init(): Promise<boolean> {
    return this.keycloak.init({
      onLoad: 'login-required',
      checkLoginIframe: false,
      pkceMethod: 'S256'
    });
  }

  getToken(): string | undefined {
    return this.keycloak.token;
  }

  getRoles(): string[] {
    return this.keycloak.tokenParsed?.realm_access?.roles || [];
  }

  isTokenExpired(): boolean {
    if (!this.keycloak.tokenParsed?.exp) return true;
    return (this.keycloak.tokenParsed.exp * 1000) < Date.now();
  }
}
