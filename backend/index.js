const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { productRouter } = require("./routes/product.route");


const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("welcome to home");
});

app.use("/product",productRouter);

app.listen(4500, async()=>{
    try {
        await connection;
        console.log("connected to db")
    } catch (error) {
        console.log(error);
    }
    console.log("running port 4500");
})