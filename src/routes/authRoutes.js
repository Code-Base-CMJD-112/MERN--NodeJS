const express = require("express")
const router = express.Router()
const authUrl = "/auth"
const { addUser } = require("../service/authService")
const User = require("../model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET;

//sign-up

router.post(`${authUrl}/signup`, async(req,res)=>{
    const {firstName, lastName, email, password,role, phone } = req.body

    if(!firstName || !lastName || !email || !password || !role || !phone){
       return res.status(401).json({errr: "Missing rquired field/s"})
    }
    try{
        const user = addUser(req.body)
        //token generate
        const token = jwt.sign({userId: user.email}, jwtSecret, {expiresIn: '1h'})
        return res.status(201).json({"message":"User create",token})
    }catch(err){
        console.error(err)
        return res.status(500).json({"message":"Internal Server error"})
    }
})

//sign in
router.post(`${authUrl}/login`,async (req,res)=>{
   const { email, password } = req.body;

   //find the user exist
   const user = await User.findOne({email})
   const isPasswordValid = await bcrypt.compare(password, user.password)

   if( !user || !isPasswordValid){
    return res.status(401).json({errr: "Invalid credentils"})
   }
   const token = jwt.sign({userId: user.email}, jwtSecret, {expiresIn: '1h'})
   res.json({token})

})

module.exports  = router


