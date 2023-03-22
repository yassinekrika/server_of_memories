import mongoose from "mongoose";

const portScema =  mongoose.Schema({
    title: String, 
    message: String, 
    creator: String,
    tag: [String], 
    selectedFile: String, 
    likeCount: {
        type: Number, 
        default: 0
    }, 
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model("postMessage", portScema)

export default PostMessage