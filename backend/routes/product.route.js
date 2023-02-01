const express = require("express");
const { ProductModel } = require("../model/product.model");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    let product = await ProductModel.find();
    res.send(product);
  } catch (error) {
    res.send("somthing went wrong");
    console.log(error);
  }
});

productRouter.post("/post",async(req,res)=>{
    let data = req.body;
    try {
        // let product = new ProductModel(data);
        // await product.save();
        await ProductModel.insertMany(data);
        res.send({msg:"product added"});
    } catch (error) {
        res.send({msg:"somthing went wrong"});
        console.log(error);
    }
});

module.exports = {
    productRouter
}
