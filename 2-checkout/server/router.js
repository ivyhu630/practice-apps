const { checkUser, get, addUser, addUserDetail, getUserID, getStage, updateStage, addBilling } = require("./dbHandlers.js");

// const findUserID = (session_id ) => {
//   return getUserID(session_id)
//   .then( data => {
//     console.log('found ID', data[0][0].user_ID);
//     return data[0][0].user_ID;
//   })
// }






// handle logIn logic
module.exports.post = (req, res) => {
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

  getStage(req.session_id)
  .then(data => {
    var stage = 0;
    if (data[0].length !== 0) {
      stage = data[0][0].stage;
    }
    var session_id = req.session_id;
    console.log('session id ', session_id);
    res.send({stage, session_id});
  })
  .catch(err => console.log(err));
};

module.exports.postUserDetail = (req, res) => {
  var userInfo_user_ID;
  getUserID(req.body.session_id)
  .then( data => {
    userInfo_user_ID = data[0][0].user_ID;
    return addUserDetail({ ...req.body, userInfo_user_ID })
  })
  .then(data => {
    res.send('success');
  })
  .catch(err => console.log(err));
}

module.exports.postBilling = (req, res) => {
  var billing_user_ID;
  getUserID(req.body.session_id)
  .then( data => {
    billing_user_ID = data[0][0].user_ID;
    console.log('user id ', billing_user_ID);
    console.log('other', req.body);

    return addBilling({ ...req.body, billing_user_ID })
  })
  .then(data => {
    res.send('success');
  })
  .catch(err => console.log(err));
}

module.exports.put = (req, res) => {
  var stage = req.body.stage;
  var session_id = req.session_id;
  console.log( 'stage from put requst ',stage);
  updateStage(stage, session_id)
  .then(data => {
    res.send('success');
  })
  .catch(err => console.log(err));
}













