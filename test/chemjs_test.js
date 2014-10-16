/*global describe,it*/
'use strict';
var assert = require('assert'),
  chemjs = require('../lib/chemjs.js');

describe('chemjs node module.', function() {
  it('must be awesome', function() {
    assert( chemjs.awesome(), 'awesome');
  });
});
