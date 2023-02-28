const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema({
    userID : {type : mongoose.Schema.Types.ObjectId , ref:"user"},
    productID : {type : mongoose.Schema.Types.ObjectId , ref:"product"}
});

const WishlistModel = mongoose.model("wishlist",wishlistSchema);

module.exports = {
    WishlistModel
}
   