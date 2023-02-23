const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    f_name : String,
    l_name : String,
    email : String,
    password : String,
    mobile : String,
    isAdmin : {type:Boolean, default:false}
});

const UserModel = mongoose.model("user",userSchema);

module.exports={
    UserModel
}