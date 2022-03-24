const { save, update, getWords, deleteOne } = require('./databaseHandler.js');

model.export.get = (req, res) => {
  getWords()
  .then(result => res.send(result))
  .catch(err => err);
};

model.export.post = (req, res) => {
  save(res.body)
  .then(result => res.send(result))
  .catch(err => throw('could not save ', err));
};

model.export.put = (req, res) => {
  update(res.body)
  .then(result => res.send(result))
  .catch(err => throw('could not update ', err));
};

model.export.delete = (req, res) => {
  deleteOne(res.body)
  .then(result => res.send(result))
  .catch(err => throw('could not delete ', err));
};