import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Disciplina {
  id?: number;
  codigo: string;
  nome: string;
  descricao?: string;
  cargaHoraria: number;
}

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private readonly API = 'http://localhost:8082/disciplina';

  constructor(private http: HttpClient) {}

  listar(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.API);
  }

  buscarPorId(id: number): Observable<Disciplina> {
    return this.http.get<Disciplina>(`${this.API}/${id}`);
  }

  criar(disciplina: Disciplina): Observable<Disciplina> {
    return this.http.post<Disciplina>(this.API, disciplina);
  }

  atualizar(id: number, disciplina: Disciplina): Observable<Disciplina> {
    return this.http.put<Disciplina>(`${this.API}/${id}`, disciplina);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
