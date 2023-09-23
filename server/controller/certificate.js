import User from "../models/User.js";

export const viewCertificate = async (req,res)=>{
    try {
        const {phone }=req.body;
        const user = await User.findOne({ phone:phone });

        if(!user)
            return res.status(400).json({ error : "User does not exist. "})

        const { certificates } = user;
        res.status(200).json({ data: certificates });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}