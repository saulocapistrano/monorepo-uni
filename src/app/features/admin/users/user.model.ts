export interface User {
  id?: string;
  name: string;
  email: string;
  role: 'admin' | 'coordenador' | 'professor' | 'aluno';
  password?: string;
}
