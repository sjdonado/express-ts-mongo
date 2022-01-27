import { Db, MongoClient } from 'mongodb';
import { DATABASE_URL, DATABASE_NAME } from '@config/index';
import { logger } from '@utils/logger';

class MongoDB {
  static db: Db;

  static client = new MongoClient(DATABASE_URL);

  static async connect() {
    await this.client.connect();

    this.db = this.client.db(DATABASE_NAME);
    logger.info('Database connected');
  }

  static collection(name: string) {
    return this.db.collection(name);
  }

  static disconnect() {
    this.client.close();
  }
}

export default MongoDB;
