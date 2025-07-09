import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { DisciplinaService } from '../coordenador/disciplina/disciplina.service';
import { SemestreService } from '../coordenador/semestre/semestre/semestre.service';
import { UserService } from './users/user.service';
import { CursoService } from '../coordenador/curso/curso-list/curso.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  totalUsuarios = 0;
  totalCursos = 0;
  totalDisciplinas = 0;
  totalSemestres = 0;

  constructor(
    private router: Router,
    private usuarioService: UserService,
    private cursoService: CursoService,
    private disciplinaService: DisciplinaService,
    private semestreService: SemestreService
  ) {}

  ngOnInit(): void {
    this.usuarioService.listar().subscribe((dados: any[]) => {
      this.totalUsuarios = dados.length;
    });

    this.cursoService.listar().subscribe((dados: any[]) => {
      this.totalCursos = dados.length;
    });

    this.disciplinaService.listar().subscribe((dados: any[]) => {
      this.totalDisciplinas = dados.length;
    });

    this.semestreService.listar().subscribe((dados: any[]) => {
      this.totalSemestres = dados.length;
    });
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
