const express = require('express');

const leetKidsController = require('../controllers/leetKidsController');

const router = express.Router();

//we need a route that handles grabbing the questions
    //***me may need multiple routes to handle different difficulties of questions (ie, if we have 4 levels we would make 4 routes to access the appropriate database)
router.get('/', leetKidsController, (req, res) => {
    // res.status(200).json(res.locals.prompt);
    res.status(200).json(res.locals.prompt)
});
// router.get('/', (req, res) => {
//     res.status(200).send('hello')
// });


// router.post('/', (req, res) => {

// })


module.exports = router;
