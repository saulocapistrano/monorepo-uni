import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatrizCurricularService } from './matriz-curricular.service';
import { CursoService } from 'app/features/coordenador/curso/curso/curso.service';
import { SemestreService } from 'app/features/coordenador/semestre/semestre/semestre.service';
import { DisciplinaService } from 'app/features/coordenador/disciplina/disciplina/disciplina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matriz-curricular-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './matriz-curricular-list.component.html'
})
export class MatrizCurricularListComponent {
  private service = inject(MatrizCurricularService);
  private router = inject(Router);

  matriz: any[] = [];

  ngOnInit() {
    this.service.listar().subscribe(dados => this.matriz = dados);
  }

  editar(id: number) {
    this.router.navigate(['coordenador/matriz-curricular', id, 'editar']);
  }

  excluir(id: number) {
    if (confirm('Deseja realmente excluir esse ddo?')) {
      this.service.excluir(id).subscribe(() => {
        this.matriz = this.matriz.filter(m => m.id !== id);
      });
    }
  }
}
