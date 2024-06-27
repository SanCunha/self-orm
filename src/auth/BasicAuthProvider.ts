import { AuthProvider } from './AuthProvider';

export class BasicAuthProvider implements AuthProvider {
  authenticate(username: string, password: string): boolean {
    // Lógica de autenticação básica
    console.log(`Autenticando ${username} com autenticação básica.`);
    return username === 'user' && password === 'password';
  }
}
