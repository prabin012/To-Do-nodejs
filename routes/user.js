import  express  from "express";
import { User } from "../models/Schema.js";
import {addUser, login, register, searchUser, userAdd } from "../controllers/user.js";


const router =express.Router();


// send data to backend  api
router.get('/add', userAdd);

// get data from post man or form from frontend api

router.post('/register',register );

// login route api

router.post('/login',login );


// get data from post man or form from frontend api

router.post('/data',addUser );

// search data fro backed api 

router.get('/getusers',searchUser);

export default router;