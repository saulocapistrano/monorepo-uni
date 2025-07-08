import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DisciplinaService, Disciplina } from './disciplina.service';

@Component({
  selector: 'app-disciplina-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './disciplina-list.component.html',
  styleUrls: ['./disciplina-list.component.scss']
})
export class DisciplinaListComponent implements OnInit {
  disciplinas: Disciplina[] = [];

  constructor(private service: DisciplinaService) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.service.listar().subscribe(dados => this.disciplinas = dados);
  }

  excluir(id: number): void {
    if (confirm('Deseja excluir?')) {
      this.service.excluir(id).subscribe(() => this.carregar());
    }
  }
}
