const { checkUser, get, addUser } = require("./dbHandlers.js");






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












