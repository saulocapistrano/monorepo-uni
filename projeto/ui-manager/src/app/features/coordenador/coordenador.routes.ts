import { Routes } from '@angular/router';
import { CoordenadorHomeComponent } from './coordenador-home.component';
import { authGuard } from 'app/core/auth/auth.guard';
import { SEMESTRE_ROUTES } from './semestre/semestre.routes';
import { CoordenadorDashboardComponent } from './dashboard/coordenador-dashboard.component';

export const COORDENADOR_ROUTES: Routes = [
  {
    path: 'coordenador',
    canActivate: [authGuard],
    data: { roles: ['coordenador'] },
    children: [
      { path: '', component: CoordenadorDashboardComponent },
      { path: 'semestre', children: SEMESTRE_ROUTES }
    ]
  }
];
