import { expect } from 'chai';
import Index from '../src/index.js';

const index = new Index();

describe('Base test', () => {
  it('should always pass this test', (done) => {
    expect(index.value).to.be.true;
    done();
  });
});
