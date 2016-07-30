var apiClient = require('../services/api-client.service'),
    Q = require('q');

exports.index = (req, res, next) => {
    var params = req.params;

    res.render('product.hbs');
};
