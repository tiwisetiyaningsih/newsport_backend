const commentControllers = require('../controllers/comment');
const router = require('express').Router();

router.post('/create', commentControllers.create);

module.exports = router;