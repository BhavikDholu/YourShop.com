const express = require("express");
const {CartModel} = require("../model/cart.model");
const {authenticate} = require("../middlewares/authentication.middleware");

const cartRouter = express.Router();

cartRouter.get("/",authenticate, async(req,res)=>{
    const userID = req.body.userID;
    
    try {
        
    } catch (error) {
        
    }
});


