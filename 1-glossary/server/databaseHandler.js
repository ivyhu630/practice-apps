const { mongoose, Words } = require("./db.js");

module.exports = {
  save: ({ word, definition }) => Words.create({ word, definition }),

  update: ({ _id }, { word, definition }) => Words.updateOne(_id, { word, definition }),

  deleteOne: (_id) => Words.deleteOne({ _id }),

  getWords: ({ page = 0, pageSize = 3 }) => Words.find()
    .sort([['date', -1]])
    .skip(Number(page) * Number(pageSize))
    .limit(Number(pageSize)).exec()

};


