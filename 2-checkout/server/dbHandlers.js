const db = require('./db.js');

// Const getQuery = 'SELECT * FROM'
module.exports = {
  // return number of matched record
  checkUser: ({  name, email, password  }) => db.queryAsync(`SELECT EXISTS (SELECT email = '${email}' FROM users WHERE password = '${password}')`),

  // pulling from user Table
  get: ({  name, email, password  }) => db.queryAsync(`SELECT user_ID FROM users WHERE email = '${email}' AND password = '${password}'`)




}

