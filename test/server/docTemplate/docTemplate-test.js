import supertest from 'supertest';
import { expect } from 'chai';
import app from '../../../server.js';

const api = supertest(app);

describe('Template Tests', () => {
  it('get docs should return message for valid route', (done) => {
    api.get('/api/v1/templates')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('get all templates');
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
        expect(res.body.content).to.equal('get a particulatr template');
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
        expect(res.body.content).to.equal('add a template');
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
        expect(res.body.content).to.equal('edit a template');
        done();
      });
  });

  it('delete should return message for valid route', (done) => {
    api.delete('/api/v1/templates/1')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('delete a template');
        done();
      });
  });
});
