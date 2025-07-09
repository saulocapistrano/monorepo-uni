import Keycloak from 'keycloak-js';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class KeycloakService {
  private keycloak: Keycloak = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'academico-realm',
    clientId: 'sso-app'
  });

  init(): Promise<boolean> {
    return this.keycloak.init({
      onLoad: 'login-required',
      checkLoginIframe: false,
      silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
      pkceMethod: 'S256'
    });
  }

  getToken(): string | undefined {
    return this.keycloak.token;
  }

  async getValidToken(): Promise<string> {
    if (this.isTokenExpired()) {
      await this.keycloak.updateToken(30);
    }
    return this.keycloak.token!;
  }

  getRoles(): string[] {
    return this.keycloak.tokenParsed?.realm_access?.roles || [];
  }

  isTokenExpired(): boolean {
    const exp = this.keycloak.tokenParsed?.exp;
    return !exp || (exp * 1000 < Date.now());
  }

  logout(): Promise<void> {
    return this.keycloak.logout({ redirectUri: window.location.origin });
  }
}
