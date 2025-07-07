import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch, withNoXsrfProtection, withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './app/core/auth/token.interceptor';
import { provideRouter, Router } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { KeycloakService } from './app/core/auth/keycloak.service';

const keycloak = new KeycloakService();

keycloak.init().then((authenticated) => {
  if (authenticated) {
    bootstrapApplication(AppComponent, {
      providers: [
        { provide: KeycloakService, useValue: keycloak },
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        provideHttpClient(withFetch(), withNoXsrfProtection(), withInterceptorsFromDi()),
        provideRouter(APP_ROUTES)
      ]
    }).then(appRef => {
      const router = appRef.injector.get(Router);
      const userRoles = keycloak.getRoles();

      let defaultRoute = '/unauthorized';
      if (userRoles.includes('admin')) defaultRoute = '/admin';
      else if (userRoles.includes('coordenador')) defaultRoute = '/coordenador';
      else if (userRoles.includes('professor')) defaultRoute = '/professor';
      else if (userRoles.includes('aluno')) defaultRoute = '/aluno';

      router.navigateByUrl(defaultRoute);
    });

  } else {
    console.error('Falha na autenticação do Keycloak');
  }
}).catch((error) => {
  console.error('Erro ao inicializar o Keycloak:', error);
});
