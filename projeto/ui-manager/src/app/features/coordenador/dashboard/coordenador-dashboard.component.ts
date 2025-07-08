import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-coordenador-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './coordenador-dashboard.component.html',
  styleUrls: ['./coordenador-dashboard.component.scss']
})
export class CoordenadorDashboardComponent {
  cards = [
    { title: 'Semestres', route: '/coordenador/semestres', description: 'Gerencie os períodos letivos' },
    { title: 'Cursos', route: '/coordenador/cursos', description: 'Administre os cursos da instituição' },
    { title: 'Disciplinas', route: '/coordenador/disciplinas', description: 'Cadastre e gerencie disciplinas' },
    { title: 'Matriz Curricular', route: '/coordenador/matriz-curricular', description: 'Organize a grade curricular dos cursos' }
  ];
}
