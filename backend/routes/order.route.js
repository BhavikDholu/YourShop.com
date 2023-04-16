const express = require('express');
const {OrderModel} = require("../model/order.model");
const { adminAuthenticate } = require('../middlewares/admin.middleware');
const { authenticate } = require('../middlewares/authentication.middleware');


const orderRouter = express.Router();

orderRouter.get("/getall",adminAuthenticate,async(req,res)=>{

    try {
        const data = await OrderModel.find().populate(["productID"]);
        if(data.length>0){
            res.send({msg:"success",order:data});
        }else{
            res.send({order:[],msg:"no order"});
        }
        
    } catch (error) {
        console.log(error);
        res.send("something went wrong");
    }
})

orderRouter.get("/orderhistory/:id",authenticate, async(req,res)=>{
    const userID = req.body.userID;
    
    try {
        let order = await OrderModel.find({userID}).populate(["productID"]);
        if(order.length>0){
            res.send({data:order});
        }else{
            res.send({data:[],msg:"please make an order"});
        }
    } catch (error) {
        console.log(error);
        res.send("something went wrong");
    }
});

orderRouter.patch("/update/:id",adminAuthenticate,async(req,res)=>{
    const id = req.params.id;
    const status = req.body.status;
      try {
              await OrderModel.findByIdAndUpdate(id,{status});
              res.send({msg:"status updated"}); 
      } catch (error) {
          console.log(error);
          res.send("Something went wrong");
      }
  });


  module.exports={
    orderRouter
  }