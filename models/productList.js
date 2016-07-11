var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var productListSchema = new Schema({
    entityId: {type: String},
    name: {type: String},
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'product'}]
});

module.exports = mongoose.model('productlist', productListSchema);
