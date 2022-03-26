const { checkUser, get } = require("./dbHandlers.js");

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

module.exports.get = (req, res) => {
  // console.log("req is ", req.body)
    get(req.body)
    .then(data => {res.send(data)})
    .catch(err => console.log(err));
};













