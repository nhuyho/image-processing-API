import request from 'supertest';
import { resize } from '../handlers/resize';
import { app } from '../index';

describe('Test app server', () => {
  it("Request '/images' should return status 200", async () => {
    const result = await request(app)
      .get('api/images?filename=santamonica.jpg&width=200&height=700')
      .send();

    expect(result.status).toBe(200);
  });

  it('get the api/image end point ', async () => {
    const height = 400;
    const width = 200;
    const filename = '../images/santamonica.jpg';
    expect(resize(filename, width, height)).toHaveBeenCalled();
  });
});
