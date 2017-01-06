import supertest from 'supertest';
import { expect } from 'chai';
import app from '../../../server.js';

const api = supertest(app);

describe('User Auth Tests', () => {
  it('post should return message for valid route', (done) => {
    api.post('/api/v1/auth/signup')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('signup');
        done();
      });
  });

  it('post should return message for valid route', (done) => {
    api.post('/api/v1/auth/signin')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('signin');
        done();
      });
  });

  it('post should return message for valid route', (done) => {
    api.post('/api/v1/auth/signout')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('signout');
        done();
      });
  });

});
