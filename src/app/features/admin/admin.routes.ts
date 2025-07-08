// src/app/features/admin/admin.routes.ts
import { Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFormComponent } from './users/user-form.component';
import { AdminDashboardComponent } from './admin-dashboard.component';

const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'users', component: UserListComponent },
      { path: 'users/new', component: UserFormComponent },
      { path: 'users/edit/:id', component: UserFormComponent }
    ]
  }
];

export default ADMIN_ROUTES;
