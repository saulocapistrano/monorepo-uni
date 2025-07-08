import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DisciplinaService, Disciplina } from './disciplina.service';

@Component({
  selector: 'app-disciplina-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.scss']
})
export class DisciplinaFormComponent implements OnInit {
  form!: FormGroup;
  id?: number;

  constructor(
    private fb: FormBuilder,
    private service: DisciplinaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.form = this.fb.group({
      codigo: ['', Validators.required],
      nome: ['', Validators.required],
      descricao: [''],
      cargaHoraria: [1, [Validators.required, Validators.min(1)]]
    });

    if (this.id) {
      this.service.buscarPorId(this.id).subscribe(disciplina => {
        this.form.patchValue(disciplina);
      });
    }
  }

  salvar(): void {
    const dados: Disciplina = this.form.value;

    if (this.id) {
      this.service.atualizar(this.id, dados).subscribe(() => {
        this.router.navigate(['/coordenador/disciplina']);
      });
    } else {
      this.service.criar(dados).subscribe(() => {
        this.router.navigate(['/coordenador/disciplina']);
      });
    }
  }
}
