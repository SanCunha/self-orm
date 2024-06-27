export interface DatabaseConnection {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    query(collection: string, query: any): Promise<any>;
    insert(collection: string, document: any): Promise<void>;
  }
  