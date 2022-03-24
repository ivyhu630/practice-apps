const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(`mongodb://localhost:${process.env.MongoDB_PORT}/${process.env.DB_NAME}`);
// console.log('db connection is',`mongodb://localhost:${process.env.PORT}/${process.env.DB_NAME}`);
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
let wordSchema = new mongoose.Schema({
  word: { type: String, unique: true},
  definition: String,
  auther: { type: String, default: 'Jane'},
  date: { type: Date, default: Date.now }
});

let Words = mongoose.model('Words', wordSchema);

let save= async function(data) {
  // console.log('saving data ', data);
  let word = new Words(data);
  try{
    var p = await word.save();
    return p;
  }  catch(e) {
    console.log(e);
  }
};

let update =  async function(data) {
  const { word, definition } = data.newWord;
  // console.log('updating ', data);
  try {
    let p = await Words.where({ _id: data.oldWordID }).updateOne( { word, definition });
    return p;
  } catch(e) {
    console.log(e);
  }
};

let deleteOne =  async function({id}) {
  try {
    let p = await Words.deleteOne({ "_id": id });
    return p;
  } catch(e) {
    console.log(e);
  }
};

let getWords= async function() {
  try {
    const data = await Words.find();
    return data;
  } catch(e) {
    console.log(e);
  }
};

module.exports.save = save;
module.exports.getWords = getWords;
module.exports.update = update;
module.exports.deleteOne = deleteOne;
