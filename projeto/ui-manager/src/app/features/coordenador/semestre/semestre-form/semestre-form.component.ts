import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SemestreService, Semestre } from 'app/features/coordenador/semestre/semestre/semestre.service';

@Component({
  standalone: true,
  selector: 'app-semestre-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './semestre-form.component.html',
  styleUrls: ['./semestre-form.component.scss']
})
export class SemestreFormComponent {
  semestre: Semestre = {
    descricao: '',
    dataInicio: '',
    dataFim: ''
  };
  error = '';

  constructor(
    private semestreService: SemestreService,
    private router: Router
  ) {}

  salvar(): void {
    this.semestreService.criar(this.semestre).subscribe({
      next: () => this.router.navigate(['/coordenador/semestre']),
      error: (err: any) => {
        this.error = 'Erro ao salvar semestre';
        console.error(err);
      }
    });
  }
}
