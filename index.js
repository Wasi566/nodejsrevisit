const express = require("express");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;
//middleware 
app.use(express.json());

//route 
const blog = require("./routes/blog");

//mount routes 
app.use("/api/v1",blog);

const connectdb = require("./config/database");

connectdb();

//start the server 
app.listen(PORT , ()=>{
    console.log(`App is started at Port no ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send(`<h1>This is my homepage <h1/>`)
})