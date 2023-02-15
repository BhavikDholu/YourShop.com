const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/user.model");


const adminAuthenticate = async(req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, "token");
    if (decoded) {
        const userID = decoded.userID;
        const user = await UserModel.findOne({_id:userID});
        if(user.isAdmin){
            req.body.userID = userID;
            next()
        }else{
            res.send({msg:'you are not authorised'})
        }
    } else {
      res.send("Please Login first");
    }
  } else {
    res.send("Please Login first");
  }
};
module.exports = {
  adminAuthenticate,
};