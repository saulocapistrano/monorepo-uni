import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [
    { id: '1', name: 'João Silva', email: 'joao@email.com', role: 'admin' },
    { id: '2', name: 'Maria Souza', email: 'maria@email.com', role: 'aluno' }
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User | undefined {
    return this.users.find(u => u.id === id);
  }

  createUser(user: User): void {
    user.id = String(Date.now());
    this.users.push(user);
  }

  updateUser(id: string, user: User): void {
    const index = this.users.findIndex(u => u.id === id);
    if (index > -1) {
      this.users[index] = { ...this.users[index], ...user };
    }
  }

  deleteUser(id: string): void {
    this.users = this.users.filter(u => u.id !== id);
  }
}
