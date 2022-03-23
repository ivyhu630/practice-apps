const mongoose = require("mongoose");
const { schema } = mongoose;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
const wordschema = new Schema({
  word: { type: String, unique: true},
  definition: String,
  auther: { type: String, default: 'Jane'},
  date: { type: Date, default: Date.now }
});

const Words = mongoose.model('Words'. wordschema);

const save((data) => {

});


