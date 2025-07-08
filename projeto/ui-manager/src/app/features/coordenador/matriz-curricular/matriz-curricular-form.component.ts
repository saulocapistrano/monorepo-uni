import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatrizCurricularService } from './matriz-curricular.service';
import { CursoService } from '../cursos/curso.service';
import { SemestreService } from '../semestres/semestre.service';
import { DisciplinaService } from '../disciplinas/disciplina.service';
import { MatrizCurricular } from './matriz-curricular.service';

@Component({
  selector: 'app-matriz-curricular-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './matriz-curricular-form.component.html'
})
export class MatrizCurricularFormComponent {
  private fb = inject(FormBuilder);
  private service = inject(MatrizCurricularService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private cursoService = inject(CursoService);
  private semestreService = inject(SemestreService);
  private disciplinaService = inject(DisciplinaService);

  form: FormGroup;
  id?: number;
  cursos$ = this.cursoService.listar();
  semestres$ = this.semestreService.listar();
  disciplinas$ = this.disciplinaService.listar();

  constructor() {
    this.form = this.fb.group({
      cursoId: [null, Validators.required],
      semestreId: [null, Validators.required],
      disciplinaId: [null, Validators.required],
      ordem: [1, [Validators.required, Validators.min(1)]]
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
      this.service.buscarPorId(this.id).subscribe(data => this.form.patchValue(data));
    }
  }

  salvar() {
    if (this.form.invalid) return;

    const dados = this.form.value as MatrizCurricular;

    if (this.id) {
      this.service.atualizar(this.id, dados).subscribe(() => this.router.navigate(['/coordenador/matriz-curricular']));
    } else {
      this.service.criar(dados).subscribe(() => this.router.navigate(['/coordenador/matriz-curricular']));
    }
  }
}
