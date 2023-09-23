import mongoose from "mongoose";

const certiSchema = new mongoose.Schema({
    uuid:{
        type:Number,
        required:true
    }
},
{ timestamps: true }
);

const certificate = mongoose.model("certificate", certiSchema);
export default certificate;
