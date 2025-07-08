import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from './keycloak.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private keycloak: KeycloakService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.keycloak.getToken();
    const headers = token
      ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
      : req;

    return next.handle(headers);
  }
}
