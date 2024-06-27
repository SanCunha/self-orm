import { DatabaseConnection } from './DatabaseConnection';
import { MongoDBConnection } from './MongoDBConnection';
import { PostgreSQLConnection } from './PostgreSQLConnection';

export class DatabaseConnectionFactory {
  static createConnection(type: string): DatabaseConnection {
    if (type === 'mongodb') {
      return MongoDBConnection.getInstance();
    } else if (type === 'postgresql') {
      return PostgreSQLConnection.getInstance();
    } else {
      throw new Error('Tipo de banco de dados não suportado');
    }
  }
}
