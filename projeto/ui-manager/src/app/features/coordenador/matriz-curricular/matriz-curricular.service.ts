import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface MatrizCurricular {
  id?: number;
  cursoId: number;
  semestreId: number;
  disciplinaId: number;
  ordem: number;
}

@Injectable({ providedIn: 'root' })
export class MatrizCurricularService {
  private readonly API = 'http://localhost:8082/matriz-curricular';

  constructor(private http: HttpClient) {}

  listar(): Observable<MatrizCurricular[]> {
    return this.http.get<MatrizCurricular[]>(this.API);
  }

  buscarPorId(id: number): Observable<MatrizCurricular> {
    return this.http.get<MatrizCurricular>(`${this.API}/${id}`);
  }

  criar(matriz: MatrizCurricular): Observable<MatrizCurricular> {
    return this.http.post<MatrizCurricular>(this.API, matriz);
  }

  atualizar(id: number, matriz: MatrizCurricular): Observable<MatrizCurricular> {
    return this.http.put<MatrizCurricular>(`${this.API}/${id}`, matriz);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
