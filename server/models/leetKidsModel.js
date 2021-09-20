// connects mongoose to our js file
const mongoose = require('mongoose');

// create variable for database link
const mongoURI = "mongodb+srv://Ctrace12:Artifact12@cluster0.1giyn.mongodb.net/Leet-Kids?retryWrites=true&w=majority";
//import Games.jsx (because my intention is that i want to grab the gameName prop) and i want to use that value as our template literal when referencing our collection
// make the connection to the database
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Leet-Kids'
})
  .then(() => console.log('Connected to Mongo DB'))
  .catch(err => console.log(err));

  // the schema for our questions
  const Schema = mongoose.Schema;

  const game1Schema = new Schema ({
    level: Number,
    prompt: String,
    hint: String,
    answer: String,
    name: String,
    maxTimer: Number
  }, { collection : 'Games1' });
//, { collection : 'Challenge Questions'}
  const Game1 = mongoose.model('games1', game1Schema);
  // const Game1 = mongoose.model(`${Games.props.gameName}`, game1Schema)


  const game2Schema = new Schema(
    {
      level: Number,
      prompt: String,
      hint: String,
      answer: String,
      name: String,
      maxTimer: Number
    }, { collection: 'Games2' });
  //, { collection : 'Challenge Questions'}
  const Game2 = mongoose.model('games2', game2Schema);

  const game3Schema = new Schema(
    {
      level: Number,
      prompt: String,
      hint: String,
      answer: String,
      name: String,
      maxTimer: Number
    }, { collection: 'Games3' });
  //, { collection : 'Challenge Questions'}
  const Game3 = mongoose.model('games3', game3Schema);

  const game4Schema = new Schema(
    {
      level: Number,
      prompt: String,
      hint: String,
      answer: String,
      name: String,
      maxTimer: Number
    }, { collection: 'Games4' });
  //, { collection : 'Challenge Questions'}
  const Game4 = mongoose.model('games4', game4Schema);
  
  module.exports = {
    Game1,
    Game2,
    Game3,
    Game4
  };
