const express = require('express');
const producyController = require('../controllers/productController');

const router = express.Router();

router.get('/', producyController.getAllProducts);
router.get('/:id', producyController.getProductById);
router.get('/category/:categoryName', producyController.getProductsByCategory);

module.exports = router;
