import mongoose from "mongoose";

const OrgSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:5
    },
    website:{
        type:String,
        required:true
    },
    address:{
        type:String,
        default:""
    },
    issues:{
        type:Array,
        default:[]
    },
},
{ timestamps: true }
);

const Org = mongoose.model("Org", OrgSchema);
export default Org;