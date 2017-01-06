import supertest from 'supertest';
import { expect } from 'chai';
import app from '../../../server.js';

const api = supertest(app);

describe('Document Tests', () => {
  it('get docs should return message for valid route', (done) => {
    api.get('/api/v1/templates')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('get all documents');
        done();
      });
  });

  it('get a doc should return message for valid route', (done) => {
    api.get('/api/v1/templates/1')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('get aparticulatr document');
        done();
      });
  });

  it('post should return message for valid route', (done) => {
    api.post('/api/v1/templates')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('add a document');
        done();
      });
  });

  it('put should return message for valid route', (done) => {
    api.put('/api/v1/templates/1')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('edit a document');
        done();
      });
  });
});
