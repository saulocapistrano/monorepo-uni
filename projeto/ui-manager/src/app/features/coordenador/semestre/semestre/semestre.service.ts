import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Semestre {
  id?: number;
  descricao: string;
  dataInicio: string;
  dataFim: string;
}

@Injectable({
  providedIn: 'root'
})
export class SemestreService {
  private readonly apiUrl = 'http://localhost:8082/semestre';

  constructor(private http: HttpClient) {}

  listar(): Observable<Semestre[]> {
    return this.http.get<Semestre[]>(this.apiUrl);
  }

  criar(semestre: Semestre): Observable<Semestre> {
    return this.http.post<Semestre>(this.apiUrl, semestre);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
