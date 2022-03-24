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