const express = require("express");
const {WishlistModel} = require("../model/wishlist.model");
const {authenticate} = require("../middlewares/authentication.middleware");

const wishlistRouter = express.Router();

wishlistRouter.get("/",authenticate, async(req,res)=>{
    const userID = req.body.userID;
    
    try {
        let wishlist = await WishlistModel.find({userID}).populate(["productID"]);
        if(wishlist.length>0){
            res.send({data:wishlist});
        }else{
            res.send({data:[],msg:"Wishlist is Empty!", status:'warning'});
        }
    } catch (error) {
        console.log(error);
        res.send({msg:"something went wrong", status:'error'});
    }
});

wishlistRouter.post("/add",authenticate,async(req,res)=>{

    const {userID,productID} = req.body;
    try {
        const item = await WishlistModel.findOne({userID,productID});
        if(item){
            res.send({msg:"item is already in the wishlist",status:'warning'});
        }else {
            const item = new WishlistModel({userID,productID,count:1});
            await item.save();
            res.send({msg:"item is added to the wishlist",status:'success'});
        }
        
    } catch (error) {
        console.log(error);
        res.send({msg:"something went wrong", status:'error'});
    }
});

wishlistRouter.delete("/remove/:id",authenticate,async(req,res)=>{
    const id = req.params.id;

    try {
        await WishlistModel.findByIdAndDelete(id);
        res.send({msg:"item removed",status:'success'});
    } catch (error) {
        console.log(error);
        res.send({msg:"something went wrong", status:'error'});
    }
});

module.exports = {
    wishlistRouter
}


