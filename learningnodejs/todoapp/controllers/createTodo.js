//import the model 
const Todo = require("../models/Todo");;

//define route handler 

exports.createTodo = async(req,res)=>{
    try {
        //extract title and description from request body 
        const {title,description}=req.body;
        //create a new todo obj and insert in DB 
        const response = await Todo.create({
            title,description
        });

        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        })
    } catch (error) {
        console.error(err);
        console.log(err);
        res.status({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}

