import { AuthProvider } from './AuthProvider';
import { BasicAuthProvider } from './BasicAuthProvider';
import { JwtAuthProvider } from './JwtAuthProvider';

export class AuthProviderFactory {
  static createAuthProvider(type: string): AuthProvider {
    if (type === 'basic') {
      return new BasicAuthProvider();
    } else if (type === 'jwt') {
      return new JwtAuthProvider();
    } else {
      throw new Error('Tipo de autenticação não suportado');
    }
  }
}
