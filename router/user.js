const userControllers = require('../controllers/user');
const router = require('express').Router();

router.post('/register', userControllers.register);
router.post('/login', userControllers.login);
router.get('/', userControllers.getAll);
router.get('/:id', userControllers.findOne);
router.put('/:id', userControllers.update);
router.delete('/:id', userControllers.delete);

module.exports = router;