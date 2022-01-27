import { NextFunction, Request, Response } from 'express';

import RecordsSerializer from '@serializers/Record';
import RecordModel from '@models/record';
import ApiError from '@utils/ApiError';
import { Record } from '@interfaces/record';

const DATE_REGEX = /^\d\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])$/;

const ping = (req: Request, res: Response, next: NextFunction) => {
  res.json(new RecordsSerializer([]));
};

const search = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      startDate,
      endDate,
      minCount,
      maxCount,
    } = req.body;

    if (!(String(startDate).match(DATE_REGEX) && String(endDate).match(DATE_REGEX))) {
      throw new ApiError(400, 'Invalid dates');
    }

    if (!(Number(minCount) && Number(maxCount))) {
      throw new ApiError(400, 'Invalid count range');
    }

    const records = await RecordModel.search(
      startDate,
      endDate,
      Number(minCount),
      Number(maxCount),
    );

    res.json(new RecordsSerializer(records as Record[]));
  } catch (err) {
    next(err);
  }
};

export default {
  ping,
  search,
};
