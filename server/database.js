var pmongo = require('promised-mongo');

var db = pmongo(process.env.MONGOLAB_URI).collection('errors');

db.ensureIndex({
  fieldName: 'timestamp'
});

module.exports = db;
