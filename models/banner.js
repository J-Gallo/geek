var mongoose = require('mongoose'),
  Schema   = mongoose.Schema;

var bannerSchema = new Schema({
  entityId: {type: String},
  url: { type: String },
  href: { type: String },
});

module.exports = mongoose.model('banner', bannerSchema);
