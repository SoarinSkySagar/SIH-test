import {v4 as uuidv4}  from 'uuid';
import User from '../models/User.js';
import Org from '../models/Org.js';
import jwt from "jsonwebtoken";
import certificate from '../models/certi.js';1




export const createCertificate= async (req,res)=>{
    try {
        const {
            name,
            email,
            token
        }=req.body;
    
        const user = await User.findOne({
            name:name,
            email:email
        })
        if(!user)
        return res.status(400).json({ error : "User does not exist. "});

        const org = jwt.verify(token.process.env.JWT_SECRET);
    
        const organization= await Org.findOne({ _id : org.id });
        const id = "650da2c52aada884af00df55"
        const certi = await certificate.findOne({_id: id});
        res.status(200).json({uuid:certi.uuid,user});
        const uid= certi.uuid;
        certi.uuid=(uid+1)
        await certi.save();
    
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}
