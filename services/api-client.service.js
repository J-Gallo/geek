var self = {},
    restConnector = require('restler'),
    Q = require('q'),
    mongoose = require('mongoose'),

    Banner = mongoose.model('banner');

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

module.exports = self;
