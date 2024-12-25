const Post = require("../models/likeModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res )=>{
try {
    const {post , user} = req.body;
    const like = new Like({
        post , user
    });
    const savedLike = await like.save();

    //update the post collection basis on this 
    const updatedPost = await Post.findByIdAndUpdate(post, {$push : {likes:savedLike._id}} , {new : true}).populate("likes").exec();

    res.json({
        post : updatedPost , 
    })
} catch (error) {
    return res.status(400).json({
        error:"Error while fething post "
    })
}
}

exports.unlikePost = async (req, res )=>{
    try {
        const { post , like} = req.body ;

        //find id and delete the like collection me se 
        const deletedLike = await like.findOneandDelete({
            post : post , _id : like 
        }); 

        //update the post collection 
        const updatedPost = await Post.findByIdAndUpdate(post , {
            $pull:{
                likes : deletedLike.id
            } , 
        }, {
            new : true 
        });

        res.json({
            post:updatedPost
        })
    } catch (error) {
        return res.status(500).json({
            error :" Error while unliking the post"
        })
    }
}