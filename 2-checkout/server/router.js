const { get } = require("./dbHandlers.js");

module.exports.get = (req, res) => {
   get({ tableName: 'users' })
    .then(data => {res.send(data)})
    .catch(err => console.log(err));
};













