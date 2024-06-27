import { DatabaseConnectionFactory } from '../database/DatabaseConnectionFactory';
import { AuthProviderFactory } from '../auth/AuthProviderFactory';

export class UserService {
  private dbType: string;

  constructor(dbType: string) {
    this.dbType = dbType;
  }

  async register(username: string, password: string): Promise<void> {
    const db = DatabaseConnectionFactory.createConnection(this.dbType);
    await db.connect();
    await db.insert('users', { username, password });
    console.log(`Usuário ${username} cadastrado com sucesso.`);
    await db.disconnect();
  }

  async authenticate(username: string, password: string, authType: string): Promise<boolean> {
    const authProvider = AuthProviderFactory.createAuthProvider(authType);
    const db = DatabaseConnectionFactory.createConnection(this.dbType);
    await db.connect();
    const user = await db.query('users', { username, password });
    await db.disconnect();

    return user.length > 0 && authProvider.authenticate(username, password);
  }
}
