'use strict';

var format = require('./format');
var cleanUrl = require('./clean-url');

module.exports = function (url, delimiter, placeholders) {
  if (typeof delimiter === 'object') {
    placeholders = delimiter;
    delimiter = undefined;
  }
  url = String(url).trim();
  url = format(url, delimiter, placeholders);
  url = cleanUrl(url);
  return url;
};
