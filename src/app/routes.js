const { Router } = require('express');

const ContactController = require('./controller/ContactController');
const CategoryController = require('./controller/CategoryController');

const router = Router();

router.get('/contacts', ContactController.index);
router.post('/contacts', ContactController.store);
router.get('/contacts/:id', ContactController.show);
router.put('/contacts/:id', ContactController.update);
router.delete('/contacts/:id', ContactController.delete);

router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);

module.exports = router;
