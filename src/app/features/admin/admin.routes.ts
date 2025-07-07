// src/app/features/admin/admin.routes.ts
import { Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { AdminHomeComponent } from './admin-home.component';
import { UserFormComponent } from './users/user-form.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      { path: 'users', component: UserListComponent },
      { path: 'users/new', component: UserFormComponent },
      { path: 'users/edit/:id', component: UserFormComponent }
    ]
  }
];
