const newsControllers = require('../controllers/news');
const router = require('express').Router();

router.post('/create', newsControllers.create);

module.exports = router;