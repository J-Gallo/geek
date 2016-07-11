var express = require('express'),
   router = express.Router(),
   homeController = require('../controllers/home.controller'),
   apiClient = require('../services/api-client.service');

/* GET home page. */
router.get('/', homeController.index);

router.post('/banner/insert', apiClient.insertBanner);
router.post('/category/insert', apiClient.insertCategory);
router.post('/product/insert', apiClient.insertProduct);
router.post('/productList/insert', apiClient.insertProductList);


router.get('/banner/get', apiClient.getBanners);
router.get('/product/get/:id', apiClient.getProduct);
router.get('/productList/get/:id', apiClient.getProductList);



module.exports = router;
