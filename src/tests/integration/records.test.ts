import request from 'supertest';

import App from '@app';

describe('Records routes', () => {
  const BASE_URL = '/v1/records';

  describe('GET /ping', () => {
    it('Should return 200', async () => {
      const response = await request(App).get(`${BASE_URL}/ping`);

      expect(response.statusCode).toBe(200);
      expect(response.body.code).toBe(0);
      expect(response.body.msg).toBe('success');
      expect(response.body.records).toHaveLength(0);
    });
  });

  describe('POST /search', () => {
    it('Should return 200', async () => {
      const response = await request(App)
        .post(`${BASE_URL}/search`)
        .send({
          startDate: '2016-01-26',
          endDate: '2016-02-02',
          minCount: 1000,
          maxCount: 3000,
        });

      expect(response.statusCode).toBe(200);
      expect(response.body.code).toBe(0);
      expect(response.body.msg).toBe('success');

      expect(response.body.records[0]).toHaveProperty('key');
      expect(response.body.records[0]).toHaveProperty('createdAt');
      expect(response.body.records[0]).toHaveProperty('totalCount');

      expect(response.body.records[0]).not.toHaveProperty('_id');
      expect(response.body.records[0]).not.toHaveProperty('value');
      expect(response.body.records[0]).not.toHaveProperty('counts');
    });

    it('Should get 400 with Invalid dates', async () => {
      const response = await request(App)
        .post(`${BASE_URL}/search`)
        .send({});

      expect(response.statusCode).toBe(400);
      expect(response.body.code).toBe(400);
      expect(response.body.msg).toBe('Invalid dates');
      expect(response.body.records).toBeNull();
    });

    it('Should get 400 with Invalid count range', async () => {
      const response = await request(App)
        .post(`${BASE_URL}/search`)
        .send({
          startDate: '2016-01-26',
          endDate: '2016-02-02',
        });

      expect(response.statusCode).toBe(400);
      expect(response.body.code).toBe(400);
      expect(response.body.msg).toBe('Invalid count range');
      expect(response.body.records).toBeNull();
    });
  });
});
