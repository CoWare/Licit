import supertest from 'supertest';
import { expect } from 'chai';
import app from '../../../server.js';

const api = supertest(app);

describe('Document Category Tests', () => {
  it('get category should return message for valid route', (done) => {
    api.get('/api/v1/categories')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('get all doc categories');
        done();
      });
  });

  it('get a category should return a message for valid route', (done) => {
    api.get('/api/v1/categories/1')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('get docs from a particular category');
        done();
      });
  });
});
