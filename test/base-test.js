var expect = require('expect.js');
var Index = require('../src/index.js');
var index = new Index();

describe('Base test', function () {
    it('should always pass this test', function () {
        expect(index.value).to.be(true);
    });
});
