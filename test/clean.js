'use strict';

var qs = require('qs');
var url = require('url');
var expect = require('chai').expect;
var urlFormat = require('../');

describe('format(url)', function () {
  it('should remove redundant parameters', function () {
    var res = urlFormat('http://google.com/?a=123&b=&c=');
    var parsed = url.parse(res);
    var query = qs.parse(parsed.query);
    expect(query).to.deep.equal({ a: '123' });
  });

  it('should ensure url path end with slash', function () {
    var res = urlFormat('http://google.com');
    expect(res).to.deep.equal('http://google.com/');
  });

  it('should remove redundant slash', function () {
    var res = urlFormat('http://google.com//');
    expect(res).to.deep.equal('http://google.com/');
  });
});
