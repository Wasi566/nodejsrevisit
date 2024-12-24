const Todo = require("../models/Todo");

exports.deleteTodo = async (req,res)=>{
    try {
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"Todo deleted"
        })
    } catch (error) {
        res.status.json({
            success:false,
            error:error.message,
            message:"Server error "
        })
    }
}