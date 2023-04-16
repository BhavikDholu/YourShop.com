const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/user.model");
const jwt = require("jsonwebtoken");
const { adminAuthenticate } = require("../middlewares/admin.middleware");
const { authenticate } = require("../middlewares/authentication.middleware");

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

userRouter.get("/details",authenticate,async (req,res) => {
 const {userID} = req.body;
  try {
    const user = await UserModel.findById({'_id':userID});
    res.send(user);
  } catch (error) {
    res.send("something went wrong");
    console.log(error);
  }
});

userRouter.patch("/update/:id",async (req,res) => {

  const id = req.params.id;

  try {
    await UserModel.findByIdAndUpdate(id,{isAdmin:true})
    res.send({msg:"user status updated"});
  } catch (error) {
    res.send("something went wrong");
    console.log(error);
  }
});

// userRouter.patch("/update/address",authenticate,async (req,res) => {

//   const {userID, city,dist, state, pincode, address } = req.body;

//   try {
//     await UserModel.findByIdAndUpdate(userID,{city, dist, state, pincode, address})
//     res.send({msg:"user address updated"});
//   } catch (error) {
//     res.send("something went wrong");
//     console.log(error);
//   }
// });

userRouter.post("/register", async (req, res) => {
  const { f_name,l_name, email, password, mobile } = req.body;

  const exist = await UserModel.find({email});
  if(exist.length>0){
    res.send({msg:"user already exist",status:"warning"})
  }else{

    try {
      bcrypt.hash(password, 5, async (err, hash) => {
        const user = new UserModel({ f_name,l_name, email, password: hash, mobile });
        await user.save();
        res.send({msg:"Registered successfully",status:"success"});
      });
    } catch (err) {
      res.send({msg:"Error in registering the user",status:"error"});
      console.log(err);
    }
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
          res.send({ msg: "Login Successfull", token: token,status:"success" });
        } else {
          res.send({msg:"Wrong Credntials",status:"warning"});
        }
      });
    } else {
      res.send({msg:"Wrong Credntials",status:"warning"});
    }
  } catch (err) {
    res.send({msg:"Something went wrong",status:"error"});
    console.log(err);
  }
});

module.exports={
  userRouter
}