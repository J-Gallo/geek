var self = {},
    restConnector = require('restler'),
    Q = require('q'),
    mongoose = require('mongoose'),
    Banner = mongoose.model('banner'),
    Category = mongoose.model('category'),
    Product = mongoose.model('product'),
    Productlist = mongoose.model('productlist');

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
 * @name insertProductList
 * @description Insert productList to mongo
 */
self.insertProductList = (req, res) => {
    var newProductList = new Productlist({
        entityId: req.body.entityId,
        name: req.body.name,
        products: req.body.products
    });

    newProductList.save(function (err, npl) {
        if (err) {
            return res.status(500).send(err.message);
        } else {
            res.status(200).jsonp(npl);
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
        urlName: req.body.urlName,
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

self.getProductList = (req, res, id) => {
    var deferred = Q.defer();
    Productlist.findOne({entityId: id})
        .populate('products')
        .exec(function(err, productList) {
            deferred.resolve(productList);
        })


    return deferred.promise;
};

module.exports = self;
