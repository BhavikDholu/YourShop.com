const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    mobile : String,
    isAdmin : Boolean
});

const UserModel = mongoose.model("user",userSchema);

module.exports={
    UserModel
}