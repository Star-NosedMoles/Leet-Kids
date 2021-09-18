// connects mongoose to our js file
const mongoose = require('mongoose');

// create variable for database link
const mongoURI = "mongodb+srv://Ctrace12:Artifact12@cluster0.1giyn.mongodb.net/Leet-Kids?retryWrites=true&w=majority";

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
    // example: String,
    // answer: String
  }, { collection : 'Games1'});
//, { collection : 'Challenge Questions'}
  const Game1 = mongoose.model('games1', game1Schema);

  module.exports = {
    Game1,
  };
