import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({ providedIn: 'root' })
export class KeycloakService {
  private keycloak = new Keycloak({
    url: 'http://localhost:8080/',
    realm: 'academico-realm',
    clientId: 'admin-api',
  });

  async init(): Promise<boolean> {
    try {
      const authenticated = await this.keycloak.init({
        onLoad: 'login-required',
        checkLoginIframe: false,
      });
      return authenticated;
    } catch (err) {
      console.error('Keycloak init failed', err);
      return false;
    }
  }

  getToken(): string | undefined {
    return this.keycloak.token;
  }

  logout(): void {
    this.keycloak.logout();
  }

  getUsername(): string | undefined {
    return this.keycloak.tokenParsed?.['preferred_username'];
  }

  getRoles(): string[] {
    return this.keycloak.realmAccess?.roles || [];
  }

  isUserInRole(role: string): boolean {
    return this.getRoles().includes(role);
  }
}
