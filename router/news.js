const newsControllers = require('../controllers/news');
const router = require('express').Router();

router.post('/create', newsControllers.create);
router.get('/', newsControllers.getAll);
router.get('/:id', newsControllers.findOne);
router.put('/:id', newsControllers.update);
router.delete('/:id', newsControllers.delete);
router.get('/category/:id', newsControllers.getByCategoryId);

module.exports = router;