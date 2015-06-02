'use strict';

var qs = require('qs');
var url = require('url');

module.exports = function urlFormat(reqUrl) {
  var reg;
  var newUrl = url.parse(reqUrl);
  var query = qs.parse(newUrl.query);

  reg = /\/{2,}/g;
  newUrl.pathname = newUrl.pathname.replace(reg, '/');
  newUrl.path = newUrl.path.replace(reg, '/');
  Object.keys(query).forEach(function(data) {
    if (query[data] === '') {
      delete query[data];
    }
  });
  newUrl.query = query;
  newUrl.query = qs.stringify(query);
  if (newUrl.query !== '') {
    newUrl.search = '?' + newUrl.query;
  }
  else {
    newUrl.search = '';
  }
  newUrl.path = newUrl.path + newUrl.query;
  newUrl = url.format(newUrl);
  return newUrl;
};
