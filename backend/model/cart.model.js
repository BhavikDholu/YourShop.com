const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    userID : String,
    productID : String,
    count : {typr : Number , default : 1}
});

const CartModel = mongoose.model("cart",cartSchema);

module.exports = {
    CartModel
}