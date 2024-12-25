//import model 
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic 
 exports.createComment = async (req , res )=>{
    try {
        //fetch data from request body 
        const {post ,user,body} = req.body;

        //create a commment object 
        const comment = new Comment({
            post , user , body 
        })

        //save the new comment in to the db 
        const savedComment = await comment.save();

        //find the post by ID add the new comment to its comment array 
        const updatedPost = await Post.findByIdAndUpdate(post , {
           //for new entry adding use push and for deleting use pull 
            $push : {
                comments : savedComment._id
            }
        } , {new : true}).populate("comments").exec();
         //new true is used for to return the updated object 
//populate means the id which we store it popluates whole document of that respective id 

        res.json({
           post : updatedPost 
        })

    } catch (error) {
        console.error(error);
        console.log(error);
        res.status({
            success:false,
            data:"internal server error",
            message:error.message,
        })
    }
 }