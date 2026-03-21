
const User = require("../model/userModel")
const { v4: uuidv4 } = require("uuid")
const bcrypt = require("bcryptjs")

async function addUser(user){
   try{
      const hashPassoword = await bcrypt.hash(user.password, 10) 
      const newUser = new User({
         userId: uuidv4(),
         firstName: user.firstName,
         firstName: user.firstName,
         lastName: user.lastName,
         email: user.email,
         password: hashPassoword,
         role: user.role,
         phone: user.phone
      });
      return newUser.save();
      
   }catch(err){
      console.error(err)
   }
}



module.exports = { addUser }

