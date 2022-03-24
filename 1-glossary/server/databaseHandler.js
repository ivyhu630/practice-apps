const { mongoose, Words } = require("./db.js");

module.exports = {
  save: ({ word, definition }) => Words.create({ word, definition }),

  update: ({ _id }, { word, definition }) => Words.updateOne(_id, { word, definition }),

  deleteOne: (_id) => Words.deleteOne({ _id }),

  getWords: () => Words.find()

};


