const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    userID : {type : mongoose.Schema.Types.ObjectId , ref:"user"},
    productID : {type : mongoose.Schema.Types.ObjectId , ref:"product"},
    count : {type : Number , default : 1}
});

const CartModel = mongoose.model("cart",cartSchema);

module.exports = {
    CartModel
}