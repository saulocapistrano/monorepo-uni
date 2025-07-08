// src/app/features/admin/users/user-form.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class UserFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private userService = inject(UserService);

  form!: FormGroup;
  userId: string | null = null;
  isEditMode = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['aluno', Validators.required],
      password: ['', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      this.isEditMode = !!this.userId;

      if (this.isEditMode) {
        const user = this.userService.getUserById(this.userId!);
        if (user) {
          this.form.patchValue(user);
          this.form.get('password')?.clearValidators();
          this.form.get('password')?.updateValueAndValidity();
        }
      }
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const userData: User = this.form.value;

    if (this.isEditMode) {
      this.userService.updateUser(this.userId!, userData);
    } else {
      this.userService.createUser(userData);
    }

    this.router.navigate(['/admin']);
  }

  onCancel(): void {
    this.router.navigate(['/admin']);
  }
}
