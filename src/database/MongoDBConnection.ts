import { MongoClient, Db } from 'mongodb';
import { DatabaseConnection } from './DatabaseConnection';

export class MongoDBConnection implements DatabaseConnection {
  private static instance: MongoDBConnection;
  private client: MongoClient;
  private db: Db;

  private constructor() {
    this.client = new MongoClient('mongodb://localhost:27017');
    this.db = this.client.db('mydatabase');
  }

  public static getInstance(): MongoDBConnection {
    if (!MongoDBConnection.instance) {
      MongoDBConnection.instance = new MongoDBConnection();
    }
    return MongoDBConnection.instance;
  }

  public async connect(): Promise<void> {
    await this.client.connect();
    console.log('Conexão com MongoDB estabelecida.');
  }

  public async disconnect(): Promise<void> {
    await this.client.close();
    console.log('Conexão com MongoDB encerrada.');
  }

  public async query(collection: string, query: any): Promise<any> {
    return this.db.collection(collection).find(query).toArray();
  }

  public async insert(collection: string, document: any): Promise<void> {
    await this.db.collection(collection).insertOne(document);
  }
}
