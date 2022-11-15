const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itemSchema = new mongoose.Schema({
    name: 'String',
    description: 'String', 
    category:{type:Schema.Types.ObjectId,ref:"Category",required:true}, 
    price:'Number',
    stock :'Number',
    image: 'String'
})
itemSchema.virtual("url").get(function () {
    return "/inventory/items/" + this._id;
  });
const itemModel = mongoose.model('items', itemSchema);
module.exports = itemModel;