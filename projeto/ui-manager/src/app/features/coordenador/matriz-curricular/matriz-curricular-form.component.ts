import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-matriz-curricular-form',
  templateUrl: './matriz-curricular-form.component.html',
  styleUrls: ['./matriz-curricular-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class MatrizCurricularFormComponent implements OnInit {
  matrizForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.matrizForm = this.fb.group({
      id: [null],
      cursoId: [null, Validators.required],
      semestreId: [null, Validators.required],
      disciplinaId: [null, Validators.required],
      ordem: [null, Validators.required]
    });
  }

  salvar(): void {
    if (this.matrizForm.valid) {
      const dados = this.matrizForm.value;
      console.log('Dados enviados:', dados);
      // Aqui você faria a chamada ao service
    }
  }
}
