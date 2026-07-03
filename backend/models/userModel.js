import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true , unique:true},
    password: {type: String, required: true},
    cartData: {type: Object, default:{}},
    // resetOtp: {type: String, default: "" },
    // resetOtpExpireAt: {type: Number,default: 0}
    
    resetPasswordToken: {type: String, default: "" },
    resetPasswordExpires: {type: Date, default: null },
    
},{minimize:false})


const userModel= mongoose.models.user|| mongoose.model('user', userSchema)
export default userModel