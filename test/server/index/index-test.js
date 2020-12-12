import supertest from 'supertest';
import { expect } from 'chai';
import app from '../../../server.js';

const api = supertest(app);

describe('Home page Tests', () => {
  it('Should return a welcome message', (done) => {
    api.get('/')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('Welcome to our website.');
        done();
      });
  });
});