import { User } from "../models/Schema.js";
import { falsereturn, features } from "../utils/features.js";


//Registger api

export const register = async(req, res)=>{
    const { name, email, password } = req.body;

    const users = await User.findOne({email});
    if(users){
        console.log("user already exist");
       return falsereturn(res,`false`,`user already exist`);
        
    }
    await User.create({
        name, 
        email,
        password
    });
    
    features(res,`registation successfull`,201,true);
    console.log("successdful register");
};

//login api

export const login = async(req, res)=>{
    const {email, password}= req.body;

    const users = await User.findOne({email}).select("+password");
    if(!users){
        console.log("didn't find user");
        return falsereturn(res,`false`,`Enter valid email`);
    }
    const isMatch = await User.findOne({password});
    if(!isMatch){
        console.log("wrong email and password");
        return falsereturn(res,`false`,`Enter correct password`);
    }
    features(res,`welcome,${users.name}`, 201,true);
    console.log("successdful login, \n Welcome, ", users.name);
};


//search user from database
export const searchUser = async(req, res)=>{

    const { id } = req.body;
    const users = await User.findById(id);
    res.json({
        success: true,
        users
    })
    console.log("successful get the user");
    console.log(users);s

};




// create user

export const addUser =  async(req, res)=>{
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
};



//add user from server

export const userAdd = async(req , res)=>{
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
};

