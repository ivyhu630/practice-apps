const { save, update, getWords, deleteOne } = require('./databaseHandler.js');

module.exports.get = (req, res) => {
  // console.log('getting ',req.query);
  getWords(req.query)
  .then(result => res.send(result))
  .catch(err => err);
};

module.exports.post = (req, res) => {
  save(req.body)
  .then(result => res.send(result))
  .catch(err => err);
};

module.exports.put = (req, res) => {
  update(req.body.oldWordID, req.body.newWord)
  .then(result => res.send(result))
  .catch(err => err);
};

module.exports.delete = (req, res) => {
  deleteOne(req.params.word)
  .then(result => res.send(result))
  .catch(err => err);
};