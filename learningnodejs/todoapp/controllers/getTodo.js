//import the model 
const Todo = require("../models/Todo");

//ceate controller 
exports.getTodo = async (req,res)=>{
    try {
        //fetch all the todos from db 
        const allTodos =  await Todo.find({});

        //response 
        res.status(200).json({
            sucess:true,
            data:allTodos,
            message: "Entire Todo data is fetched"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Server Error"
        })
    }
}

exports.getTodoById = async(req,res)=>{
    try {
        //extract todo items by id 
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});
        if(!todo)
        {
            res.status(404).json({
                success:false,
                message:"No data found with given id"
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:`Data found Successfully for id ${id}`
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:err.messahe,
            message:"Server Error"
        })
    }
}