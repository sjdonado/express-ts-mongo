import { Router } from 'express';

import RecordsController from '@controllers/records';

const router = Router();

router.get('/ping', RecordsController.ping);

router.post('/search', RecordsController.search);

export default router;
