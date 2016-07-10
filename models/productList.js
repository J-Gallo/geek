var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var productListSchema = new Schema({
    entityId: {type: String},
    name: {type: String},
    products: []
});

module.exports = mongoose.mode('productList', productListSchema);
