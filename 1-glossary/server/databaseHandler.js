const { mongoose, Words } = require("./db.js");

module.exports = {
  save: ({ word, definition }) => Words.create({ word, definition }),

  update: ({ _id }, { word, definition }) => Words.update({ _id }, { word, definition }),

    // const { word, definition } = data.newWord;
    // try {
    //   let p = await Words.where({ _id: data.oldWordID }).updateOne( { word, definition });
    //   return p;
    // } catch(e) {
    //   console.log(e);
    // }

  deleteOne: ({ _id }) => Words.deleteOne({ _id }),

  getWords: () => Words.find()

};


