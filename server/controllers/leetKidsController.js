// import from model.js file
const models = require('../models/leetKidsModel');
const { locals } = require('../routes/server');
const leetKidsController = {}

// controller to retrieve questions
leetKidsController.getQuestions = async (req, res, next) => {
  try {
    const game = await models.Game1.find({})


    res.locals.prompt = game;
    return next();
  }
  catch {
    next({
      log: 'Express error handler caught error in leetKidsController.getQuestions',
      status: 500,
      message: { err: 'Express error handler caught error in leetKidsController.getQuestions' },
    });
  }
}

module.exports = leetKidsController;
