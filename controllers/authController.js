import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken"
export const registerController=async (req,res)=>{
    try {
        const {name,email,password,phone,address,answer}=req.body
        //validation
        if(!name){
            return res.send({message:'Name is required'})
        }
        if(!email){
            return res.send({message:'Email is required'})
        }
        if(!password){
            return res.send({message:'Password is required'})
        }
        if(!phone){
            return res.send({message:'Phone is required'})
        }
        if(!address){
            return res.send({message:'address is required'})
        }
        if(!answer){
            return res.send({message:'answer is required'})
        }
        //check user

        const exsistingUser=await userModel.findOne({email})
        //exsisting user
        if(exsistingUser){
            return res.status(200).send({
                success:false,
                message:"Already registered"
            })
        }

        //register user
        const hashedPassword=await hashPassword(password)

        //save

        const user=await new userModel({name,email,phone,address,password:hashedPassword,answer}).save()

        res.status(201).send({
            success:true,
            message:'User register Sucessfully',
            user
        })


    }
     catch (message) {
        console.log(message)
        res.status(500).send({
            success:false,
            message:'Error in registration',
            
        })
    }
};

 //post login

 export const loginController=async(req,res)=>{
    try {
        const {email,password}=req.body
        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"Invalid email or password"
            })
        }
        //check user
        const user=await userModel.findOne({email})
        if(!user){
            return res.status(400).send({
                success:false,
                message:'Email is not registerd'
            })
        }
        const match=await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid password'
            })
        }

        //token
        const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
            expiresIn:"7d",
        });
        res.status(200).send({
            success:true,
            message:'login sucess',
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                role:user.role
            },
            token,
        })
    } catch (message) {
        console.log(message)
        res.status(500).send({
            success:false,
            message:"Error in login",
            error
        })
    }

 };


 // forgot password controller
  export const forgotPasswordController=async(req,res)=>{
    try {
        const {email,answer,newPassword}=req.body
        if(!email){
            res.status(400).send({message:'Email is required'})
        }
        if(!answer){
            res.status(400).send({message:'answer is required'})
        }
        if(!newPassword){
            res.status(400).send({message:'new password is required'})
        }
        //check
        const user=await userModel.findOne({email,answer})
        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Wrong email or Answer"
            })
        }
        const hashed=await hashPassword(newPassword)
        await userModel.findByIdAndUpdate(user._id,{password:hashed})
        res.status(200).send({
            success:true,
            message:"password reset sucessfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
        success:false,
        message:'Something went wrong',
        error
        })
        
    }

 }

 //test controller

 export const testController=(req,res)=>{
    try {
        res.send("protected rules")
    } catch (error) {
        console.log(error)
        res.send(error)
    }
 }


 //update profile
 export const updateProfileController= async(req,res)=>{
    try {
        const {name,email,password,address,phone}=req.body
        const user=await userModel.findById(req.user._id)
        //password
        if(password && password.length<6){
            return res.json({error:"password is required and 6  character long"})
        }
        const hashedPassword=password ? await hashPassword(password) :undefined
        const updatedUser=await userModel.findByIdAndUpdate(req.user._id,{
            name:name || user.name,
            password:hashedPassword || user.password,
            phone:phone || user.phone,
            address:address || user.address
        },{new:true})
        res.status(200).send({
            success:true,
            message:"profile updated sucessfully",
            updatedUser
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success:false,
            message:'Error in while update profile',
            error
        })
    }
 }

//orders
export const getOrdersController=async(req,res)=>{
    try {
       const orders=await orderModel.find({buyer:req.user._id}).populate("products","-photo").populate("buyer","name").sort({ createdAt: -1 });
       res.json(orders)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error while getting Orders",
            error
        })
    }
}

// all orders
export const getAllOrdersController = async (req, res) => {
    try {
      const orders = await orderModel
        .find({})
        .populate("products", "-photo")
        .populate("buyer", "name")
        .sort({ createdAt: -1 });
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error While Geting Orders",
        error,
      });
    }
  };

  //order status
export const orderStatusController = async (req, res) => {
    try {
      const { orderId } = req.params;
      const { status } = req.body;
      const orders = await orderModel.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
      );
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error While Updating Order",
        error,
      });
    }
  };
  //delete  by id
  export const cancelOrderService=async(req,res)=>{
    
    try {
        console.log("reqParam",req.params)
        await orderModel.findByIdAndDelete(req.params.oid)
        res.status(200).send({
            success:true,
            message:"order cancelled Sucessfully"
        })
    } catch (error) {
        console.log(error),
        res.status(500).send({
            success:false,
            message:"Error while cancelling an order ",
            error
        })
    }
}