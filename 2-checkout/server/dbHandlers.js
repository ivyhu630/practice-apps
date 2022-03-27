const db = require('./db.js');

// Const getQuery = 'SELECT * FROM'
module.exports = {
  // return number of matched record
  // checkUser: ({  name, email, password  }) => db.queryAsync(`SELECT EXISTS (SELECT email = '${email}' FROM users WHERE password = '${password}')`),

  // pulling from user Table
  get: ({ email, password }) => db.queryAsync(`SELECT user_ID FROM users WHERE email = '${email}' AND password = '${password}'`),

  checkUser: ({ email }) => db.queryAsync(`SELECT user_ID FROM users WHERE email = '${email}'`),

  getUserID: (session_id) => db.queryAsync(`SELECT user_ID FROM users WHERE session_id = '${session_id}'`),

  addUser: ({ name, email, password, session_id, stage }) => db.queryAsync(`INSERT INTO users (name, email, password, session_id, stage) VALUES( '${name}', '${email}', '${password}' , '${session_id}', ${stage})`),

  addUserDetail: ({ address1 ,address2, city, state, zip, phone, userInfo_user_ID }) => db.queryAsync(`INSERT INTO userInfo (address1 ,address2, city, state, zip, phone, userInfo_user_ID) VALUES( '${address1}', '${address2}', '${city}' , '${state}' , '${zip}' , '${phone}' ,${userInfo_user_ID})`),

  addBilling: ({ card_number, expiration, CVV, billing_zip, billing_user_ID }) => db.queryAsync(`INSERT INTO billing (card_number, expiration, CVV, billing_zip, billing_user_ID) VALUES( '${card_number}', '${expiration}', '${CVV}' , '${billing_zip}' ,${billing_user_ID})`),

  getStage: (session_id) => db.queryAsync(`SELECT stage FROM users WHERE session_id = '${session_id}'`),

  updateStage: (stage, session_id) => db.queryAsync(`UPDATE users SET stage = ${stage} WHERE session_id = '${session_id}'`),


}

