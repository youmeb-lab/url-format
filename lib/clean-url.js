'use strict';

var qs = require('qs');
var url = require('url');
var path = require('path');

module.exports = function urlFormat(reqUrl) {
  var parsedUrl = url.parse(reqUrl);
  var query = qs.parse(parsedUrl.query);

  cleanObject(query);

  parsedUrl.query = qs.stringify(query);

  parsedUrl.search = parsedUrl.query
    ? '?' + parsedUrl.query
    : '';

  parsedUrl.pathname = ''
    + path.resolve(parsedUrl.path)
    + parsedUrl.search;

  return url.format(parsedUrl);
};

function cleanObject(obj) {
  Object
    .keys(obj)
    .forEach(function(key) {
      if (!obj[key]) {
        delete obj[key];
      }
    });
}
