var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var categorySchema = new Schema({
    entityId: {type: String},
    name: {type: String},
});

module.exports = mongoose.model('category', categorySchema);
