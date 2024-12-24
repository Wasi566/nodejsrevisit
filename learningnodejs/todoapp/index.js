const express = require("express");
const app = express();

//load config from env file 
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json request body 
// const bodyParser = require("body-parser");

app.use(express.json());

//import routes for TODO API 
const todoRoutes = require("./routes/todos");
//mpunt the todo api routes 
app.use("/api/v1",todoRoutes);



app.listen(PORT,()=>{
console.log(`Server running at ${PORT}`);
});

//connect to the database 
const dbConnect = require("./config/database");
dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h1>this is home page <h1/>`);
})