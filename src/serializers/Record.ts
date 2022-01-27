import { Record } from '@interfaces/record';

import BaseSerializer from './Base';

const VALID_KEYS = ['key', 'createdAt', 'totalCount'];

class RecordsSerializer extends BaseSerializer {
  constructor(records: Record[]) {
    const serializedRecords = records.map((record) => {
      const newDoc = {};
      VALID_KEYS.forEach((key) => {
        newDoc[key] = record[key];
      });
      return newDoc;
    });
    super(0, serializedRecords);
  }
}

export default RecordsSerializer;
