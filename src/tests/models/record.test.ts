import RecordModel from '@models/record';
import { ObjectId } from 'mongodb';

const SEARCH_RESPONSE = [
  {
    _id: new ObjectId('5ee21588e07f053f990cecb5'),
    key: 'bxoQiSKL',
    value: 'mfHLfQocQzlV',
    createdAt: new Date('2016-01-29T01:59:53.494Z'),
    counts: [
      1901,
      648,
      442,
    ],
    totalCount: 2991.0,
  },
  {
    _id: new ObjectId('5ee21588e07f053f990cec68'),
    key: 'NOdGNUDn',
    value: 'IVcKQGklZwEY',
    createdAt: new Date('2016-01-28T07:10:33.558Z'),
    counts: [
      545,
      821,
      1447,
    ],
    totalCount: 2813.0,
  },
];

describe('Record model', () => {
  describe('#search()', () => {
    it('Should completed successfully', async () => {
      const output = await RecordModel.search('2016-01-26', '2016-02-02', 2700, 3000);

      expect(output).toMatchObject(SEARCH_RESPONSE);
    });
  });
});
