import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  nome: string;
  email: string;
  tipo: 'administrador' | 'coordenador' | 'professor' | 'aluno';
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  usuarios: User[] = [
    { id: 1, nome: 'Ana Silva', email: 'ana@exemplo.com', tipo: 'administrador' },
    { id: 2, nome: 'Carlos Souza', email: 'carlos@exemplo.com', tipo: 'coordenador' },
    { id: 3, nome: 'João Lima', email: 'joao@exemplo.com', tipo: 'aluno' }
  ];

  editarUsuario(usuario: User) {
    console.log('Editar usuário:', usuario);
  }

  excluirUsuario(id: number) {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
    console.log('Usuário excluído:', id);
  }
}
