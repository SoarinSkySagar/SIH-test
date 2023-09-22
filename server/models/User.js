import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    address:{
        type:String,
        default:""
    },
    certificates: {
        type:Array,
        default:[],
    },
},
{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;