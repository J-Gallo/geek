var apiClient = require('../services/api-client.service'),
    Q = require('q');

exports.index = (req, res, next) => {
    var banners = apiClient.getBanners(req,res),
        productLists = apiClient.getProductList(req,res, 1);

    Q.spread([banners, productLists], function(resBanners, resProductLists) {
        console.log(resProductLists.name);
        res.render('index.hbs', {
            banners: resBanners,
            productLists: resProductLists
        })
    });
};
