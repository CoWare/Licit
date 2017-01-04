const expect = require('expect.js');
const Index = require('../src/index.js');
const index = new Index();

describe('Base test', function () {
  it('should always pass this test', function () {
    expect(index.value).to.be(true);
  });
});
