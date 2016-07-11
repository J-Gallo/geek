var express = require('express'),
   router = express.Router(),
   homeController = require('../controllers/home.controller'),
   apiClient = require('../services/api-client.service');

/* GET home page. */
router.get('/', homeController.index);

router.post('/banner/insert', apiClient.insertBanner);
router.post('/category/insert', apiClient.insertCategory);
router.post('/product/insert', apiClient.insertProduct);

router.get('/banner/get', apiClient.getBanners);
router.get('/product/get/:id', apiClient.getProduct);


module.exports = router;
