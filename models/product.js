var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var productSchema = new Schema({
    entityId: {type: String},
    name: {type: String},
    price: {type: Number},
    description: {type: String},
    category: {type: String},
    images: []
});

module.exports = mongoose.mode('product', productSchema);
