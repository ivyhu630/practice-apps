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

let save=((data) => {
  console.log('saving data ', data);
  let word = new Words(data);
  return word.save((e) =>{
    if(e){
      console.log(e);
    }
  });
});

let getWords= async function() {
  const data = await Words.find();
  // console.log('data is ', data);
  return data;
};

module.exports.save = save;
module.exports.getWords = getWords;
