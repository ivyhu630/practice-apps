Const db = require('/db.js');

// Const getQuery = 'SELECT * FROM'
module.exports = {
  get: ({ tableName }) => db.queryAsync(`SELECT * FROM ${tableName} `)
}