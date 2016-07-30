var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Category = require('../models/category');

var productSchema = new Schema({
    entityId: {type: String},
    name: {type: String},
    urlName: {type: String},
    price: {type: Number},
    description: {type: String},
    category: {type: Schema.Types.ObjectId, ref: 'category'},
    images: []
});

module.exports = mongoose.model('product', productSchema);
