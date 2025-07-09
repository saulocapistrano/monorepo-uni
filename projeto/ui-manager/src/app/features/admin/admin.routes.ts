import { Routes } from '@angular/router';

import { AdminHomeComponent } from './admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard.component';

import { UserListComponent } from './users/user-list/user-list.component';
import { UserFormComponent } from './users/user-form.component';

import { CursoListComponent } from '../coordenador/curso/curso-list/curso-list.component';
import { CursoFormComponent } from '../coordenador/curso/curso-form/curso-form.component';

import { DisciplinaListComponent } from '../coordenador/disciplina/disciplina-list.component';
import { DisciplinaFormComponent } from '../coordenador/disciplina/disciplina-form.component';

import { SemestreListComponent } from '../coordenador/semestre/semestre-list/semestre-list.component';
import { SemestreFormComponent } from '../coordenador/semestre/semestre-form/semestre-form.component';

import { MatrizCurricularFormComponent } from '../coordenador/matriz-curricular/matriz-curricular-form.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'users', component: UserListComponent },
      { path: 'users/new', component: UserFormComponent },
      { path: 'users/edit/:id', component: UserFormComponent },

      { path: 'cursos', component: CursoListComponent },
      { path: 'cursos/new', component: CursoFormComponent },
      { path: 'cursos/edit/:id', component: CursoFormComponent },

      { path: 'disciplinas', component: DisciplinaListComponent },
      { path: 'disciplinas/new', component: DisciplinaFormComponent },
      { path: 'disciplinas/edit/:id', component: DisciplinaFormComponent },

      { path: 'semestres', component: SemestreListComponent },
      { path: 'semestres/new', component: SemestreFormComponent },
      { path: 'semestres/edit/:id', component: SemestreFormComponent },

      { path: 'matriz-curricular', component: MatrizCurricularFormComponent }
    ]
  }
];
