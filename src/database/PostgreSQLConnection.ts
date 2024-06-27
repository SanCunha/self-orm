import { Client } from 'pg';
import { DatabaseConnection } from './DatabaseConnection';

export class PostgreSQLConnection implements DatabaseConnection {
  private static instance: PostgreSQLConnection;
  private client: Client;

  private constructor() {
    this.client = new Client({
      host: 'localhost',
      user: 'youruser',
      password: 'yourpassword',
      database: 'mydatabase'
    });
  }

  public static getInstance(): PostgreSQLConnection {
    if (!PostgreSQLConnection.instance) {
      PostgreSQLConnection.instance = new PostgreSQLConnection();
    }
    return PostgreSQLConnection.instance;
  }

  public async connect(): Promise<void> {
    await this.client.connect();
    console.log('Conexão com PostgreSQL estabelecida.');
  }

  public async disconnect(): Promise<void> {
    await this.client.end();
    console.log('Conexão com PostgreSQL encerrada.');
  }

  public async query(table: string, query: any): Promise<any> {
    const result = await this.client.query(`SELECT * FROM ${table} WHERE $1::text = $2`, [query.field, query.value]);
    return result.rows;
  }

  public async insert(table: string, document: any): Promise<void> {
    const keys = Object.keys(document).join(', ');
    const values = Object.values(document);
    const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');

    await this.client.query(`INSERT INTO ${table} (${keys}) VALUES (${placeholders})`, values);
  }
}
