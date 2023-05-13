import  express  from "express";
import userRouter from "./routes/user.js";

import { config } from "dotenv";


export const app =express();

config({
    path : "./connection/config.env",
})
//middleware used

app.use(express.json());
app.use(userRouter);


app.get('/', (req, res)=>{
    res.send("Server runung on the port")
});



