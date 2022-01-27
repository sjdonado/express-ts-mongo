import MongoDB from '@services/mongodb';

beforeAll(async () => {
  await MongoDB.connect();
});

afterAll(() => {
  MongoDB.disconnect();
});
