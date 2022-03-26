const db = require('./db.js');

// Const getQuery = 'SELECT * FROM'
module.exports = {
  // return number of matched record
  // checkUser: ({  name, email, password  }) => db.queryAsync(`SELECT EXISTS (SELECT email = '${email}' FROM users WHERE password = '${password}')`),

  // pulling from user Table
  get: ({ email, password }) => db.queryAsync(`SELECT user_ID FROM users WHERE email = '${email}' AND password = '${password}'`),

  checkUser: ({ email }) => db.queryAsync(`SELECT user_ID FROM users WHERE email = '${email}'`),

  addUser: ({ name, email, password }) => db.queryAsync(`INSERT INTO users (name, email, password) VALUES( '${name}', '${email}', '${password}')`)




}

