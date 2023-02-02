const express = require("express");
const { ProductModel } = require("../model/product.model");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { category, type } = req.query;
  const count = await ProductModel.countDocuments();
  const totalPages = Math.ceil(count / limit);
  let product;
  try {
    if (category) {
      product = await ProductModel.find({ category })
        .limit(limit)
        .skip((page - 1) * limit)
        .exec();
    } else if (type) {
      product = await ProductModel.find({ type })
        .limit(limit)
        .skip((page - 1) * limit)
        .exec();
    }else{
      product = await ProductModel.find()
        .limit(limit)
        .skip((page - 1) * limit)
        .exec();
    }
    res.send({totalPages,product});
  } catch (error) {
    res.send("something went wrong");
    console.log(error);
  }
});

productRouter.post("/create", async (req, res) => {
  let data = req.body;
  try {
    // let product = new ProductModel(data);
    // await product.save();
    await ProductModel.insertMany(data);
    res.send({ msg: "product added" });
  } catch (error) {
    res.send({ msg: "something went wrong" });
    console.log(error);
  }
});

module.exports = {
  productRouter,
};
