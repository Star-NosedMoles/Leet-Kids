const path = require('path');
const express = require('express');

const app = express();

const apiRouter = require('./routers/api')

const PORT = 3000;

//JSON parsers for incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//tentatively create a static handler in case we need it

//app.use(express.static(path.resolve(__dirname, '../src')))



//define route handlers
app.use('/api', apiRouter);


//define our catch handler
app.use((req, res) => res.status(404).send('The page didn\'t load :('));

//Handle global error object under here
app.use((err, req, res, next) => {
  return res.status(500).send(err);
});


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`)
})

module.exports = app;
