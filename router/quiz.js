const quizControllers = require('../controllers/quiz');
const router = require('express').Router();

router.post('/', quizControllers.create);
router.get('/', quizControllers.getAll);
router.get('/:id', quizControllers.findOne);
router.put('/:id', quizControllers.update);
router.delete('/:id', quizControllers.delete);
router.get('/category/:id', quizControllers.getByCategoryId);
router.get('/level/:id', quizControllers.getByLevelId);

module.exports = router;