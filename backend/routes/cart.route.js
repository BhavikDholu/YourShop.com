const express = require("express");
const {CartModel} = require("../model/cart.model");
const {authenticate} = require("../middlewares/authentication.middleware");

const cartRouter = express.Router();

cartRouter.get("/",authenticate, async(req,res)=>{
    const userID = req.body.userID;
    
    try {
        let cart = await CartModel.find({userID}).populate(["productID"]);
        if(cart.length>0){
            res.send({data:cart});
        }else{
            res.send({data:[],msg:"cart is Empty!"});
        }
    } catch (error) {
        console.log(error);
        res.send("something went wrong");
    }
});

cartRouter.post("/add",authenticate,async(req,res)=>{

    const {userID,productID} = req.body;
    try {
        const item = await CartModel.findOne({userID,productID});
        if(item){
            res.send({msg:"item is already in the cart"});
        }else {
            const item = new CartModel({userID,productID,count:1});
            await item.save();
            res.send({msg:"item is added to the cart"});
        }
        
    } catch (error) {
        console.log(error);
        res.send("Something went wrong");
    }
});

cartRouter.patch("/update/:id",authenticate,async(req,res)=>{
  const id = req.params.id;
  const count = req.body.count;
    try {
            await CartModel.findByIdAndUpdate(id,{count});
            res.send({msg:"count updated"}); 
    } catch (error) {
        console.log(error);
        res.send("Something went wrong");
    }
});

cartRouter.delete("/remove/:id",authenticate,async(req,res)=>{
    const id = req.params.id;

    try {
        await CartModel.findByIdAndDelete(id);
        res.send({msg:"item removed"});
    } catch (error) {
        console.log(error);
        res.send("something went wrong");
    }
});

module.exports = {
    cartRouter
}


