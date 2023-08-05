// console.log("kaniskaa")
const dbConnect = require("./config/config");
// const error = require("./errorHandler/handle_error")
const express = require("express");
const cors=require("cors")
const paymentRoutes=require("./controllers.js/Payment")
//dynamically linking a port 
const dotenv = require("dotenv").config();
const port = process.env.PORT;
dbConnect();
const app = express();
app.use(cors())
app.use(express.json());
app.use("/", require("./controllers.js/Blog"));
app.use("/", require("./controllers.js/Plan"));
app.use("/", require("./controllers.js/SchemaModel"));
app.use("/", require("./controllers.js/About"));
app.use("/", require("./controllers.js/Feedback"));
app.use("/", require("./controllers.js/CorporateWellness"));
app.use("/", require("./controllers.js/Contact"));
app.use("/", require("./controllers.js/Footer"));
app.use("/api/payment/",paymentRoutes);







// app.use(error)


app.listen(port, ()=>
{
    console.log(`running in ${port}`);
})