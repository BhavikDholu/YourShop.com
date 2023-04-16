const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const {OrderModel} = require("../model/order.model");
const {CartModel} = require("../model/cart.model")
require("dotenv").config();
const { authenticate } = require("../middlewares/authentication.middleware");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

const paymentRouter = express.Router();

paymentRouter.post("/checkout", async (req, res) => {
  const { value } = req.body;
  const options = {
    amount: Number(value * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  res.send({ msg: "success", order });
});

paymentRouter.post("/paymentverification/:id", async (req, res) => {

  const userID = req.params.id;
  try {
    let cart = await CartModel.find({userID})
    if(cart.length>0){
          await OrderModel.insertMany(cart);
          await CartModel.deleteMany({userID})
    }
    res.redirect(
      `http://localhost:3000/paymentsuccess`
    );
  } catch (error) {
    res.send("somthing went wrong");
  }
  

});

paymentRouter.get("/getkey",(req,res)=>{
    res.send({key:process.env.RAZORPAY_API_KEY})
})

module.exports = {
  paymentRouter,
};
