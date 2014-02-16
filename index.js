'use strict';

var latlon = require('mt-latlon');
var transform = require('./mt-coordtransform')(latlon);

module.exports = transform;