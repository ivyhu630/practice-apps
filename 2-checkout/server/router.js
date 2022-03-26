const { checkUser, get, addUser } = require("./dbHandlers.js");

// module.exports.get = (req, res) => {
//   console.log("req is ", req.query)
//    checkUser(req.data)
//     .then(data => {res.send(data)})
//     .catch(err => console.log(err));


// };

module.exports.postUser = (req, res) => {
  // console.log("req is ", req.body)
    checkUser(req.body)
    .then(data => {res.send(data)})
    .catch(err => console.log(err));
};



// handle logIn logic
module.exports.post = (req, res) => {
  console.log("req is ", req.body)
    get(req.body)
    .then(data => {
      console.log('posting ', data[0])
      const isLoggedIn = !!data[0].length;
      let user_ID = null;
      if (isLoggedIn) {
        [{ user_ID }] = data[0]
        res.send({ user_ID, isLoggedIn });
      } else {
        // console.log('did not log in checking whether user exist');
        checkUser(req.body)
        .then(data => {
          // console.log('user exist? ', data[0])
          const userExist = !!data[0].length;
          if (userExist) {
            res.send({ user_ID, isLoggedIn });
          } else {
            // console.log('registring new user');
            addUser(req.body)
            .then((data) => {
              user_ID = data[0].insertId;
              // console.log('new ID is ', user_ID);
              res.send({ user_ID, isLoggedIn });
            })
          }
        })
        .catch(err => console.log(err));
      }
    });

};













