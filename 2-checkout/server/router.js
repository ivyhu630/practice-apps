const { checkUser, get, addUser, addUserDetail, getUserID } = require("./dbHandlers.js");

// const findUserID = (session_id ) => {
//   return getUserID(session_id)
//   .then( data => {
//     console.log('found ID', data[0][0].user_ID);
//     return data[0][0].user_ID;
//   })
// }





// handle logIn logic
module.exports.post = (req, res) => {
  var user_ID = null;
  var isLoggedIn = false;
  return checkUser(req.body)
    .then(data => {
      const userExist = !!data[0].length;
      if (userExist) {
        return get(req.body)
        .then(data => {
          isLoggedIn = !!data[0].length;
          if (isLoggedIn) {
            [{ user_ID }] = data[0];
          }
        });
      } else {
        return addUser(req.body)
        .then((data) => {
          user_ID = data[0].insertId;
          isLoggedIn = true;
        });
      }
    })
    .then(()=> {
      res.send({ user_ID, isLoggedIn });
    })
    .catch(err => console.log(err));
};


// send back sessionID
module.exports.get = (req, res) => {
  res.send(req.session_id);
}

module.exports.postUserDetail = (req, res) => {
  var userInfo_user_ID;
  getUserID(req.body.session_id)
  .then( data => {
    console.log('found ID', data[0][0].user_ID);
    userInfo_user_ID = data[0][0].user_ID;
    console.log(' jere', userInfo_user_ID);
    return addUserDetail({ ...req.body, userInfo_user_ID })
  })
  .then(data => {
    console.log('postUser', data);
    res.send('success');
  })
  .catch(err => console.log(err));
}












