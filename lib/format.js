'use strict';

var Mustache = require('mustache');

module.exports = function (str, delim, locals) {
  str = setDelim(delim, str);
  return Mustache.render(str, locals || {});
};

function setDelim(delim, str) {
  return delim
    ? '{{=' + delim + '=}}' + str
    : str;
}
