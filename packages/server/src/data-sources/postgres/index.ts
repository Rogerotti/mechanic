import { DataSource } from 'apollo-datasource';
import { Client } from 'pg';
import { ICity } from 'types';

export class PostgresDB extends DataSource {
  client: Client;

  constructor(client: Client) {
    super();
    this.client = client;
  }

  async getCities(): Promise<ICity[]> {
    const result = await this.client.query(`SELECT * FROM public."Cities"
    ORDER BY id ASC `);
    return result.rows;
  }
}
