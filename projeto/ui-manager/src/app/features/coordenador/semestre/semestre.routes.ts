import { Routes } from '@angular/router';
import { SemestreListComponent } from './semestre-list/semestre-list.component';
import { SemestreFormComponent } from './semestre-form/semestre-form.component';
import { authGuard } from 'app/core/auth/auth.guard';

export const SEMESTRE_ROUTES: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    data: { roles: ['coordenador'] },
    children: [
      { path: '', component: SemestreListComponent },
      { path: 'novo', component: SemestreFormComponent }
    ]
  }
];
