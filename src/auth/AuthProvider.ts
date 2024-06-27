export interface AuthProvider {
    authenticate(username: string, password: string): boolean;
  }
  