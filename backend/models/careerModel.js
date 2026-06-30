import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({

    fullName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    skills:{
        type:String,
        required:true
    },

    contribution:{
        type:String,
        required:true
    },

    resume:{
        type:String,
        required:true
    },

    status:{
        type:String,
        default:"New"
    },

    date:{
        type:Number,
        default:Date.now
    }

})

const careerModel = mongoose.models.career || mongoose.model("career",careerSchema)

export default careerModel;