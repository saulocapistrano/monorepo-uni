import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { KeycloakService } from './core/auth/keycloak.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = false;
  title = 'ui-manager';

  constructor(private keycloakService: KeycloakService, private router: Router) {
    console.log(router.config)
  }
}
