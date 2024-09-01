const User=require("../models/User");
const bcrypt = require('bcryptjs');
const jwt=require("jsonwebtoken");
require("dotenv").config();
exports.signup=async(req,res)=>{
   
    try{
       //fetching data from req body
       const {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        } = req.body;
  
        //validate krlo 
  
        if(!firstName || !lastName || !email || !confirmPassword || !password){
          return res .status(403).json({
              success:false,
              message:"All fields are required",
          })
        }
  
        // check kro ki password and confirm password match krrre h ya nhi 
        if(password!==confirmPassword){
          return res.status(400).json({
              success:false,
              message:"Password and confirm password not match please try again"
          })
        }
  
        //check kro ki user exist krta hai 
        const existingUser=await User.findOne({email});
        if(existingUser){
          return res.status(400).json({
              success:false,
              message:"User exist already"
          });
        }

  //Hash password
  const hashedPassword=await bcrypt.hash(password,10);
  
  
  // entry create in db
  
  const user=await User.create({
       firstName,
        lastName,
        email,
        password: hashedPassword,
  })
  
  return res.status(200).json({
      success:true,
      message:"User is Registered Sucessfully",
      user,
  })
    }
  
    catch(error){
  console.log(error);
  res.status(500).json({
      success:false,
      message:error.message,
  })
    }
  }

  exports.login=async(req,res)=>{
    try{
        // get data from req body
        const{email,password}=req.body;
        
        //validation data
        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:"All fields are required,please try again",
            });
        }
        // check user exist or not 
        const user=await User.findOne({email})

        if(!user){
            return res.status(401).json({
                success:false,
                message:"User is not Registered,Please signup first",
            })
        }

        //password matching and creating jwt token 
        if(await bcrypt.compare(password,user.password)){
            const payload={
                email:user.email,
                id:user._id,
            }
          const token=jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:"2h",
          });  
          user.token=token,
          user.password=undefined;
          const options={
            expires:new Date(Date.now()+3*24*60*60*1000),
          }

          //create cookie and send response
          res.cookie("token",token,options).status(200).json({
            success:true,
            token,
            user,
            message:"Logged In successfully",
          })
        }
        else{
            return res.status(401).json({
                success:false,
                message:"Password is Incorrect",
            })
        }
    }
    catch(error){
console.log(error);
return res.status(500).json({
    success:false,
    message:error.message,
})
    }
}
