import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Curso, CursoService } from 'app/features/coordenador/curso/curso/curso.service';

@Component({
  standalone: true,
  selector: 'app-curso-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {
  cursos: Curso[] = [];
  loading = false;
  error = '';

  constructor(private service: CursoService, private router: Router) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.loading = true;
    this.service.listar().subscribe({
      next: (res: any) => {
        this.cursos = res;
        this.loading = false;
      },
      error: (err: any) => {
        this.error = 'Erro ao buscar cursos';
        this.loading = false;
      }
    });
  }

  novo(): void {
    this.router.navigate(['coordenador/curso/novo']);
  }

  deletar(id: number): void {
    if (confirm('Deseja remover este curso?')) {
      this.service.deletar(id).subscribe(() => this.carregar());
    }
  }
}
