'use strict';

const parseDate = require('../handlers')


module.exports = function (app) {
  
  app.route('/api/timestamp/:date_string?')
    .get(parseDate)


};