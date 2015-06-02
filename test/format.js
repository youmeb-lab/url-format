'use strict';

var qs = require('qs');
var url = require('url');
var expect = require('chai').expect;
var urlFormat = require('../');

describe('format(url, placeholders)', function () {
  it('should replace placeholders with real value', function () {
    var res = urlFormat('http://google.com/?a={{a}}&b={{b}}', { a: 123, b: 321 });
    var parsed = url.parse(res);
    var query = qs.parse(parsed.query);
    expect(query).to.deep.equal({ a: '123', b: '321' });
  });
});

describe('format(url, delimiter, placeholders)', function () {
  it('should change delimiter', function () {
    var res = urlFormat('http://google.com/?a=[a]', '[ ]', { a: 123 });
    var parsed = url.parse(res);
    var query = qs.parse(parsed.query);
    expect(query).to.deep.equal({ a: '123' });
  });
});
