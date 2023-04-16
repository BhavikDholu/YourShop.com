const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    userID : {type : mongoose.Schema.Types.ObjectId , ref:"user"},
    productID : {type : mongoose.Schema.Types.ObjectId , ref:"product"},
    count : {type : Number},
    status : {type : String, default : "pending"},
    createdAt: { type: Date, default: Date.now() },
    deliveredAt: { type: Date }
},
{
  timestamps: true,
});

const OrderModel = mongoose.model("order",orderSchema);

module.exports = {
    OrderModel
}