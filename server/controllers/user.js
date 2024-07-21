import User from '../models/user'; // Assuming your User model is defined in this path
import jwt from 'jsonwebtoken';

// Controller function to check if user exists
exports.checkUserExists = async (email) => {
    try {
        // Query database to find a user with the provided email
        const user = await User.findOne({ email });
        
        // Return true if user exists, false otherwise
        //1.return this in response 
        return res.status(400).json({
            success:!!user,

        })
        // Double negation to convert user to boolean
    } catch (error) {
        console.error('Error checking user:', error);
        return res.status(400).json({
            success:false,
            error:"got into an error"
        })
         // Return false in case of any error
    }
}

exports.signup=async(req,res)=>{
    try{ 
        const {userData}=req.body

        const user=await User.create(
            userData
        )
        const token = jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {
                expiresIn:"1w",// change this 
            }
        )
        user.token=token
        //set cookie for token and return success response
        const options={
            expires:new Date(Date.now()+3*24*60*60*1000),
            httpOnly:true,
        }
        res.cookie("token",token,options).status(200).json({
            success:true,
            token,
            user,
            message:`User login success`,
        })
        
        return res.status(200).json({
            success:true,
            user,
            message:"user created succesfully",
        })

    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            error:"internal server error",

        })   
    }
}
exports.login=async(req,res)=>{
    try{

        const{email}=req.body
        if(!email)
        {
            return res.status(400).json({
                success:false,
                error:"missing email",
            })
        }
        const user=await User.findOne({email})
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {
              expiresIn: "1w",
            }
          )
          user.token = token
          const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,// so that only browser can manipulate this cookie not the user
          }
          res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: `User Login Success`,
          }) 
        }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            error:"internal server error",

        })       


    }
}

export default {
    checkUserExists,
    signup,
    login,
};