var express = require('express'),
   router = express.Router(),
   homeController = require('../controllers/home.controller'),
   apiClient = require('../services/api-client.service');

/* GET home page. */
router.get('/', homeController.index);

router.post('/banner/insert', apiClient.insertBanner);
router.get('/banner/get', apiClient.getBanners);

module.exports = router;
