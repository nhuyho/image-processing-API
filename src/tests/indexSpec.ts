import supertest from 'supertest';
import app from '../app';
const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('endpoint: /api/images', (): void => {
  it('gets /api/images?filename=fjord&width=200&height=300', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/images?filename=fjord&width=199&height=199'
    );
    expect(response.status).toBe(200);
  });
});
