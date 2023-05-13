
import { app } from "./app.js";
import { connectDb } from "./connection/dbconnection.js";


//database connection 

connectDb();




 //server
app.listen(process.env.PORT, ()=>{
    
    console.log("Server running at port 5000")
});
