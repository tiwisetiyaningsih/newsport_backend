const quizControllers = require('../controllers/jobsheet');
const router = require('express').Router();

router.post('/one', quizControllers.submitOne);
router.post('/many', quizControllers.submitMany);

module.exports = router;