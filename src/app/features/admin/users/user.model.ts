export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'coordenador' | 'professor' | 'aluno';
}
