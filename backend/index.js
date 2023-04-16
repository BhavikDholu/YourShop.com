const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { productRouter } = require("./routes/product.route");
const { userRouter } = require("./routes/user.route");
const { cartRouter } = require("./routes/cart.route");
const { wishlistRouter } = require("./routes/wishlist.route");
const {paymentRouter} =  require('./routes/payment.route');
const { orderRouter } = require("./routes/order.route");


const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("welcome to home");
});

app.use("/user",userRouter);
app.use("/product",productRouter);
app.use("/cart",cartRouter);
app.use("/wishlist",wishlistRouter);
app.use("/payment",paymentRouter);
app.use("/order",orderRouter)

app.listen(4500, async()=>{
    try {
        await connection;
        console.log("connected to db")
    } catch (error) {
        console.log(error);
    }
    console.log("running port 4500");
})
