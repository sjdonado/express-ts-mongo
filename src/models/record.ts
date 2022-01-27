import MongoDB from '@services/mongodb';

const search = async (
  startDate: string,
  endDate: string,
  minCount: number,
  maxCount: number,
) => {
  const result = await MongoDB.collection('records').aggregate([
    {
      $addFields: {
        totalCount: {
          $reduce: {
            input: '$counts',
            initialValue: 0,
            in: { $add: ['$$value', '$$this'] },
          },
        },
      },
    },
    {
      $match: {
        totalCount: { $gt: minCount, $lt: maxCount },
        createdAt: { $gt: new Date(startDate), $lt: new Date(endDate) },
      },
    },
  ]).toArray();

  return result;
};

export default { search };
