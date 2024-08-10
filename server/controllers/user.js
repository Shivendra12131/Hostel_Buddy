import User from '../models/user.js'; 
import jwt from 'jsonwebtoken';

export const checkUserExists = async (req, res) => {
    try {
        const {email} = req.body

        const user = await User.findOne({ email });
        
        return res.status(400).json({
            success:!!user,
        })
    } catch (error) {
        console.error('Error checking user:', error);
        return res.status(400).json({
            success:false,
            error:"got into an error"
        })
    }
}

export const signup=async(req,res)=>{
    try{ 
        const {userData} = req.body
        console.log(userData)
        const user=await User.create(
            userData
        )
        const token = jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {
                expiresIn:"1w", 
            }
        )
        const options={
            expires:new Date(Date.now()+3*24*60*60*1000),
            httpOnly:true,
        }
        return res.cookie("token",token,options).status(200).json({
            success:true,
            token,
            user: {
                name: userData.name,
                email: userData.email,
                profileImage: userData.profileImage
            },
            message:`User created successfully`,
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
export const login=async(req,res)=>{
    try{

        const{email}=req.body
        if(!email)
        {
            return res.status(400).json({
                success:false,
                error:"missing email",
            })
        }
        const userData=await User.findOne({email})
        const token = jwt.sign(
            {id: userData._id},
            process.env.JWT_SECRET,
            {
              expiresIn: "1w",
            }
          )
          const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
          }
          res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user: {
                name: userData.name,
                email: userData.email,
                profileImage: userData.profileImage
            },
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