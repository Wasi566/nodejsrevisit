const express = require("express");
const { createComment } = require("../controllers/commentController");
const { createPost , getAllPost} = require("../controllers/postController");
const {likePost, unlikePost} = require("../controllers/likeControlller");
const router = express.Router();

//import controller 


//create routes 
router.post("/comments/create", createComment);   
router.post("/posts/create",createPost);     
router.get("/posts", getAllPost) 
router.post("/likes/like", likePost);
router.post("/likes/unlike",unlikePost);
//export 
module.exports = router; 

