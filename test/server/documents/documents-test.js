import supertest from 'supertest';
import { expect } from 'chai';
import app from '../../../server.js';

const api = supertest(app);

describe('Document Tests', () => {
  it('get docs should return message for valid route', (done) => {
    api.get('/api/documents')
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
    api.get('/api/documents/1')
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
    api.post('/api/documents')
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
    api.put('/api/documents/1')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('edit a document');
        done();
      });
  });

  it('get category should return message for valid route', (done) => {
    api.get('/api/categories')
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
    api.get('/api/categories/1')
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
