import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Org from "../models/Org.js";

export const verifyUserToken = async (req, res, next) => {
  try {
    const {token}=req.body;
    if (!token) {
      return res.status(403).json({error: "Access Denied"});}
    const user = jwt.verify(token,process.env.JWT_SECRET);
    
    const check= await User.findOne({ _id : user.id });
    if(!check)
    return res.status(400).json({ error : "User does not exist. "}); 
    next();
    }

   catch (error) {
    res.status(500).json({ error: err.message });
  }
  
};

export const verifyOrgToken = async (req,res,next)=>{
  try {
    const {token}=req.body;
    if (!token) {
      return res.status(403).send("Access Denied");}
    const org = jwt.verify(token,process.env.JWT_SECRET);
    
    const check= await Org.findOne({ _id : org.id });
    if(!check)
    return res.status(400).json({ error: "User does not exist. "}); 
    next();
  } catch (error) {
    res.status(500).json({ error: errpr.message });
  }
  
};