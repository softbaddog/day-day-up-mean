'use strict';

let assert = require('assert');

let sqrt = require('./../lib/sqrt').sqrt;

describe('#sqrt()', function() {
    it('sqrt(4) should equal 2', function() {
        assert.equal(sqart(4), 2);
    });
    it('#sqrt(-1) should throw an Error', function() {
        assert.throws(function() {
            sqrt(-1);
        });
    });
});