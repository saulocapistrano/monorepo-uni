import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Semestre, SemestreService } from 'app/features/coordenador/semestre/semestre/semestre.service';

@Component({
  standalone: true,
  selector: 'app-semestre-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './semestre-list.component.html',
  styleUrls: ['./semestre-list.component.scss']
})
export class SemestreListComponent implements OnInit {
  semestres: Semestre[] = [];
  loading = false;
  error = '';

  constructor(
    private semestreService: SemestreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscarSemestres();
  }

  buscarSemestres(): void {
    this.loading = true;
    this.semestreService.listar().subscribe({
      next: (dados: any) => {
        this.semestres = dados;
        this.loading = false;
      },
      error: (err: any) => {
        this.error = 'Erro ao buscar semestres';
        console.error(err);
        this.loading = false;
      }
    });
  }

  novo(): void {
    this.router.navigate(['coordenador/semestre/novo']);
  }

  deletar(id: number): void {
    if (!confirm('Deseja remover este semestre?')) return;

    this.semestreService.deletar(id).subscribe({
      next: () => this.buscarSemestres(),
      error: (err: any) => {
        this.error = 'Erro ao deletar semestre';
        console.error(err);
      }
    });
  }
}
