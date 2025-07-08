import { Routes } from '@angular/router';
import { MatrizCurricularListComponent } from './matriz-curricular-list.component';
import { MatrizCurricularFormComponent } from './matriz-curricular-form.component';

export const MATRIZ_CURRICULAR_ROUTES: Routes = [
  { path: '', component: MatrizCurricularListComponent },
  { path: 'novo', component: MatrizCurricularFormComponent },
  { path: ':id/editar', component: MatrizCurricularFormComponent }
];
