import mongoose from "mongoose";

export const connectDb = ()=>{
    mongoose.connect(process.env.MONGO_URI ,{
    dbName:"Product"
}).then(()=>{
        console.log("db connected");
    }).catch(()=>{
        console.log("error");
    });
};