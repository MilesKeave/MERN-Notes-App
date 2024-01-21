const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require('../util/generateToken');

const registerUser = asyncHandler(async (req, res) =>{

    const {name, email, password, pic,} = req.body;
    const userExists = await User.findOne({email});

    if (userExists){
        res.status(400);
        throw new Error("User already exists");
    }

   const user = await User.create({name, email, password, pic});

   if (user){

    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        password: user.password,
        token: generateToken(user._id)

    })

   }
   else{
    res.status(400)
    throw new Error("Error occured!")
   }

   
});

const authUser = asyncHandler(async (req, res) =>{
    console.log("auth?")

    const {email, password} = req.body;
    const user = await User.findOne({email});

    if((user)&& (user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            password: user.password,
            token: generateToken(user._if)
    
        })
        
    }
    else{
        res.status(400);
        throw new Error("Invalid email or password");
    }

    
});

module.exports = {registerUser, authUser}

