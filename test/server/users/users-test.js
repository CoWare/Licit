import supertest from 'supertest';
import { expect } from 'chai';
import app from '../../../server.js';

const api = supertest(app);

describe('User Route Tests', () => {
  it('get should return a message for a valid route', (done) => {
    api.get('/api/v1/users/1')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('get single user');
        done();
      });
  });

  it('put should return message for a valid route', (done) => {
    api.put('/api/v1/users/1')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('edit single user');
        done();
      });
  });

  it('get doc route should return message', (done) => {
    api.get('/api/v1/users/1/documents')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('get a user\'s documents');
        done();
      });
  });

  it('get doc with id should retyurn message for valid route', (done) => {
    api.get('/api/v1/users/1/documents/1')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('get a specified document from a specified user');
        done();
      });
  });

  it('post should return message for valid route', (done) => {
    api.post('/api/v1/users/1/documents')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('add a document');
        done();
      });
  });

  it('put user doc should return message for valid route', (done) => {
    api.put('/api/v1/users/1/documents/1')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('edit a specified document');
        done();
      });
  });

  it('delete should return message for valid route', (done) => {
    api.delete('/api/v1/users/1/documents/1')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('delete a specified document');
        done();
      });
  });

  it('get should return message for valid route', (done) => {
    api.get('/api/v1/users')
      .expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.have.property('content');
        expect(res.body.content).to.equal('get all users');
        done();
      });
  });
});
