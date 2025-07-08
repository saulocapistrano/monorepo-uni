import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { KeycloakService } from './app/core/auth/keycloak.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './app/core/auth/token.interceptor';

const keycloakService = new KeycloakService();

const loading = document.createElement('div');
loading.innerText = 'Carregando...';
loading.id = 'app-loading';
loading.style.padding = '20px';
loading.style.fontFamily = 'Arial';
document.body.appendChild(loading);

keycloakService.init().then(authenticated => {
  if (!authenticated) {
    loading.innerText = 'Autenticação falhou';
    return;
  }

  bootstrapApplication(AppComponent, {
    providers: [
      { provide: KeycloakService, useValue: keycloakService },
      provideHttpClient(withInterceptorsFromDi()),
      provideRouter([
        ...APP_ROUTES,
        {
          path: '',
          redirectTo: getDefaultRoute(keycloakService),
          pathMatch: 'full'
        }
      ]),
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
    ]
  }).then(() => {
    document.getElementById('app-loading')?.remove();
  }).catch(err => {
    loading.innerText = `Erro na aplicação: ${err.message}`;
    console.error('Erro no bootstrapApplication:', err);
  });
}).catch(err => {
  loading.innerText = `Erro no Keycloak: ${err.message}`;
  console.error('Erro no init do Keycloak:', err);
});

function getDefaultRoute(keycloak: KeycloakService): string {
  const roles = keycloak.getRoles();

  if (roles.includes('admin')) return '/admin';
  if (roles.includes('coordenador')) return '/coordenador';
  if (roles.includes('professor')) return '/professor';
  if (roles.includes('aluno')) return '/aluno';

  return '/unauthorized';
}
