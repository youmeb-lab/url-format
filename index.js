'use strict';

var qs = require('qs');
var url = require('url');

module.exports = function urlFormat(reqUrl) {
  var reg;
  var nQuery = [];
  var newUrl = url.parse(reqUrl);
  var reNewUrl = url.parse(newUrl);
  var query = qs.parse(newUrl.query);

  reg = /\/{2,}/g;
  newUrl.pathname = newUrl.pathname.replace(reg, '/');
  newUrl.path = newUrl.path.replace(reg, '/');
  newUrl = url.format(newUrl);
  Object.keys(query).forEach(function(data) {
    if (query[data] !== '') {
      nQuery.push(data + '=' + query[data]);
    }
  });
  reNewUrl.query = qs.parse(nQuery.join('&'));
  reNewUrl.query = qs.stringify(reNewUrl.query);
  if (reNewUrl.query !== '') {
    reNewUrl.search = '?' + reNewUrl.query;
  }
  else {
    reNewUrl.search = '';
  }
  reNewUrl.path = reNewUrl.path + reNewUrl.query;
  reNewUrl = url.format(reNewUrl);
  return reNewUrl;
};
