import User from "../models/User";

export const validate = async(req,res)=>{
    try {
        const{
            email
        }=req.body;
        const user = await User.findOne({ email : email });
        if(!user)
        return res.status(400).json({error:"User does not exist."})
        req.status(200).json({address:user.address});
        } catch (error) {
        res.status(500).json({ error: error.message });
    }
}