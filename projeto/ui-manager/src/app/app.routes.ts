import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';

export const APP_ROUTES: Routes = [

  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: 'coordenador',
    loadChildren: () =>
      import('./features/coordenador/coordenador.routes')
        .then(m => m.COORDENADOR_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: 'professor',
    loadChildren: () =>
      import('./features/professor/professor.routes')
        .then(m => m.PROFESSOR_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: 'aluno',
    loadChildren: () =>
      import('./features/aluno/aluno.routes')
        .then(m => m.ALUNO_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: 'unauthorized'
  }

];
