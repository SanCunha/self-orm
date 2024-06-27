import { AuthProvider } from './AuthProvider';

export class JwtAuthProvider implements AuthProvider {
  authenticate(username: string, password: string): boolean {
    // Lógica de autenticação JWT
    console.log(`Autenticando ${username} com autenticação JWT.`);
    return username === 'user' && password === 'jwtpassword';
  }
}
