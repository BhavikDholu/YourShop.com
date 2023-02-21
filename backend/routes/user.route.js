const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/user.model");
const jwt = require("jsonwebtoken");
const { adminAuthenticate } = require("../middlewares/admin.middleware");

const userRouter = express.Router();

userRouter.get("/",adminAuthenticate,async (req,res) => {

  try {
    const user = await UserModel.find()
    res.send(user);
  } catch (error) {
    res.send("something went wrong");
    console.log(error);
  }
});

userRouter.patch("/update/:id",adminAuthenticate,async (req,res) => {

  const id = req.params.id;

  try {
    await UserModel.findByIdAndUpdate(id,{isAdmin:true})
    res.send({msg:"user status updated"});
  } catch (error) {
    res.send("something went wrong");
    console.log(error);
  }
});

userRouter.post("/register", async (req, res) => {
  const { name, email, password, mobile } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      const user = new UserModel({ name, email, password: hash, mobile });
      await user.save();
      res.send("Registered successfully");
    });
  } catch (err) {
    res.send("Error in registering the user");
    console.log(err);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, function (err, result) {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, "token");
          res.send({ msg: "Login Successfull", token: token });
        } else {
          res.send("Wrong Credntials");
        }
      });
    } else {
      res.send("Wrong Credntials");
    }
  } catch (err) {
    res.send("Something went wrong");
    console.log(err);
  }
});

module.exports={
  userRouter
}