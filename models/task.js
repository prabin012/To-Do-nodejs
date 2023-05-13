import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    tittle:{
        type:String,
        required : true
    },
    Description:{
        type:String,
        required : true
    },
    isCompleted: {
       type: Boolean,
       default : false,

    },
    user:{
        type :mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    createedAt: {
      type :  Date,
      default : Date.now,
    }
})
export const Task =mongoose.model("Task",userSchema);