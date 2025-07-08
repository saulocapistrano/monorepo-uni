import { Routes } from '@angular/router';
import { DisciplinaListComponent } from './disciplina-list.component';
import { DisciplinaFormComponent } from './disciplina-form.component';

export const DISCIPLINA_ROUTES: Routes = [
  { path: '', component: DisciplinaListComponent },
  { path: 'novo', component: DisciplinaFormComponent },
  { path: ':id/editar', component: DisciplinaFormComponent }
];
