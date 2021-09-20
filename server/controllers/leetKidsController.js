// import from model.js file
const models = require('../models/leetKidsModel');
const { locals } = require('../routes/server');
const leetKidsController = {}

// controller to retrieve questions
leetKidsController.getQuestions1 = async (req, res, next) => {
  try {
    const game = await models.Game1.find({})
    res.locals.prompt = game;
    return next();
  }
  catch {
    next({
      log: 'Express error handler caught error in leetKidsController.getQuestions1',
      status: 500,
      message: { err: 'Express error handler caught error in leetKidsController.getQuestions1' },
    });
  }
}

leetKidsController.getQuestions2 = async (req, res, next) => {
  try {
    const game = await models.Game2.find({});
    res.locals.prompt = game;
    return next();
  } catch {
    next({
      log: "Express error handler caught error in leetKidsController.getQuestions2",
      status: 500,
      message: {
        err: "Express error handler caught error in leetKidsController.getQuestions2",
      },
    });
  }
};

leetKidsController.getQuestions3 = async (req, res, next) => {
  try {
    const game = await models.Game3.find({});
    res.locals.prompt = game;
    return next();
  } catch {
    next({
      log: "Express error handler caught error in leetKidsController.getQuestions3",
      status: 500,
      message: {
        err: "Express error handler caught error in leetKidsController.getQuestions3",
      },
    });
  }
};

leetKidsController.getQuestions4 = async (req, res, next) => {
  try {
    const game = await models.Game4.find({});
    res.locals.prompt = game;
    return next();
  } catch {
    next({
      log: "Express error handler caught error in leetKidsController.getQuestions4",
      status: 500,
      message: {
        err: "Express error handler caught error in leetKidsController.getQuestions4",
      },
    });
  }
};

module.exports = leetKidsController;
