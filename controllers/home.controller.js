var apiClient = require('../services/api-client.service');

exports.index = (req, res, next) => {
    apiClient.getBanners(req,res).then(function(banners) {
        res.render('index.hbs', {
            banners: banners
        });

    })
};
