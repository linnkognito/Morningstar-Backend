const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.get('/category/:categoryName', productController.getProductsByCategory);
router.get(
  '/category/:categoryName/:productType',
  productController.getProductsByType
);

module.exports = router;
