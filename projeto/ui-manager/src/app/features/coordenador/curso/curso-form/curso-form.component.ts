import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso, CursoService } from 'app/features/coordenador/curso/curso/curso.service';

@Component({
  standalone: true,
  selector: 'app-curso-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent {
  curso: Curso = { nome: '', descricao: '' };
  error = '';

  constructor(private service: CursoService, private router: Router) {}

  salvar(): void {
    this.service.criar(this.curso).subscribe({
      next: () => this.router.navigate(['/coordenador/curso']),
      error: (err: any) => {
        this.error = 'Erro ao salvar curso';
        console.error(err);
      }
    });
  }
}
