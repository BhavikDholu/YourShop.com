const express = require("express");
const { ProductModel } = require("../model/product.model");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { category, type } = req.query;
  let count = await ProductModel.countDocuments();
  let totalPages = Math.ceil(count / limit);
  let product;
  try {
    if (category) {
      product = await ProductModel.find({ category })
        .limit(limit)
        .skip((page - 1) * limit)
        .exec();
       count = await ProductModel.countDocuments({category});
       totalPages = Math.ceil(count / limit);
    } else if (type) {
      product = await ProductModel.find({ type })
        .limit(limit)
        .skip((page - 1) * limit)
        .exec();
       count = await ProductModel.countDocuments({type});
       totalPages = Math.ceil(count / limit);
    } else {
      product = await ProductModel.find()
        .limit(limit)
        .skip((page - 1) * limit)
        .exec();
    }
    res.send({ totalPages, product, totalItem: count });
  } catch (error) {
    res.send("something went wrong");
    console.log(error);
  }
});

productRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductModel.findById(id).exec();
    res.send({ product: product });
  } catch (error) {
    console.log(error);
    res.send("something went wrong");
  }
});

productRouter.post("/create", async (req, res) => {
  let data = req.body;
  try {
    let product = new ProductModel(data);
    await product.save();
    // await ProductModel.insertMany(data);
    res.send({ msg: "Product Added Successfully", status: "success" });
  } catch (error) {
    res.send({ msg: "something went wrong", status: "error" });
    console.log(error);
  }
});

productRouter.delete("/remove/:id",async(req,res)=>{
  const id = req.params.id;

  try {
      await ProductModel.findByIdAndDelete(id);
      res.send({msg:"item removed", status: "success"});
  } catch (error) {
      console.log(error);
      res.send({msg:"something went wrong", status: "error"});
  }
});

module.exports = {
  productRouter,
};
