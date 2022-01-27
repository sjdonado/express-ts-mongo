import request from 'supertest';

import App from '@app';

describe('Index routes', () => {
  it('Should return not found', async () => {
    const response = await request(App).get('/');

    expect(response.statusCode).toBe(404);
    expect(response.body.code).toBe(404);
    expect(response.body.msg).toBe('Not found');
    expect(response.body.records).toBeNull();
  });
});
