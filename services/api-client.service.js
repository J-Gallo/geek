var self = {},
    restConnector = require('restler'),
    Q = require('q'),
    mongoose = require('mongoose'),
    Banner = mongoose.model('banner'),
    Category = mongoose.model('category'),
    Product = mongoose.model('product'),
    ProductList = mongoose.model('productList');

/**
 * @name insertBanner
 * @description Insert banner to mongo
 */
self.insertBanner = (req, res) => {
    var newBanner = new Banner({
        entityId: req.body.entityId,
        url: req.body.url,
        href: req.body.href != undefined ? req.body.href : null
    });

    newBanner.save(function (err, nb) {
        if (err) {
            return res.status(500).send(err.message);
        } else {
            res.status(200).jsonp(nb);
        }
    })
};



/**
 * @name insertProduct
 * @description Insert product to mongo
 */
self.insertProduct = (req, res) => {
    var newProduct = new Product({
        entityId: req.body.entityId,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        images: req.body.images

    });

    newProduct.save(function (err, np) {
        if (err) {
            return res.status(500).send(err.message);
        } else {
            res.status(200).jsonp(np);
        }
    })
};

/**
 * @name insertCategory
 * @description Insert category to mongo
 */
self.insertCategory = (req, res) => {
    var newCategory = new Category({
        entityId: req.body.entityId,
        name: req.body.name,
    });

    newCategory.save(function (err, nc) {
        if (err) {
            return res.status(500).send(err.message);
        } else {
            res.status(200).jsonp(nc);
        }
    })
};


/**
 * @name getBanners
 * @description Get images to display on main carousel
 */
self.getBanners = (req, res) => {
  var q = Banner.find({}).limit(4),
  deferred = Q.defer();
  q.exec(function(err, banners) {
    if(err) return res.send(500, err.message);
       deferred.resolve(banners);
  });

  return deferred.promise;
};


self.getProduct = (req, res) => {
    Product.findOne({entityId: req.params.id})
        .populate('category')
        .exec(function(err, product) {
            console.log(product);
            res.send(product);
        })
};

module.exports = self;
