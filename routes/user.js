import  express  from "express";
import { User } from "../models/Schema.js";

const router =express.Router();

// send data to backend  api
router.get('/add', async(req , res)=>{
    const user = await User.create({
        name : "prabon",
        email : "kumarprabin12@gmail.com",
        password : "prabin12"
    })
    res.json({
        success : true,
        message : "register Successful"
    })
    console.log(user);
    console.log("sucessful creeate")
})

// get data from post man or form from frontend api

router.post('/data', async(req, res)=>{
    const { name, email , password} = req.body;

    const data =await User.create({
        name,
        email,
        password
    });
  
    res.status(201).json({
        success :true,
        message: "register successfull"
    });
    console.log(data);
})


// search data fro backed api 

router.get('/getusers', async(req, res)=>{

    const { id } = req.body;
    const users = await User.findById(id);
    res.json({
        success: true,
        users
    })
    console.log("successful get the user");
    console.log(users);

})

export default router;