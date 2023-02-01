const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  image: String,
  title: String,
  description: String,
  rating: String,
  d_price: String,
  price: String,
  discount: String,
  offer: String,
  category : String,
  type : String
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = {
  ProductModel,
};
