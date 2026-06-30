import careerModel from "../models/careerModel.js";
import { v2 as cloudinary } from "cloudinary";
import axios from "axios";

const submitApplication = async(req,res)=>{
    try{

        const {
            fullName,
            email,
            phone,
            skills,
            contribution
        } = req.body;

        const resumeFile = req.file;
        if (!resumeFile) {
            return res.json({
                success: false,
                message: "Resume is required"
            });
        }
        const result = await cloudinary.uploader.upload(resumeFile.path);
        console.log(result);
        const applicationData={

            fullName,

            email,

            phone,

            skills,

            contribution,

            resume:result.secure_url,

            // date:Date.now()

        }
        const application = new careerModel(applicationData);

        await application.save();

        res.json({

            success:true,

            message:"Application Submitted"

        })

    }

    catch(error){

        console.log(error);

        res.json({
            success:false,
            message:error.message
        })

    }


}


const listApplications = async(req,res)=>{

    try {

        const applications = await careerModel.find({}).sort({ date: -1 });

        res.json({
            success:true,
            applications
        });

    } catch (error) {

        console.log(error);

        res.json({
            success:false,
            message:error.message
        });

    }

}


const deleteApplication = async(req,res)=>{

    try {

        await careerModel.findByIdAndDelete(req.body.id);

        res.json({
            success:true,
            message:"Application Deleted"
        });

    } catch (error) {

        console.log(error);

        res.json({
            success:false,
            message:error.message
        });

    }

}

const updateStatus = async(req,res)=>{

    try {

        const {id,status} = req.body;

        await careerModel.findByIdAndUpdate(id,{status});

        res.json({
            success:true,
            message:"Status Updated"
        });

    } catch (error) {

        console.log(error);

        res.json({
            success:false,
            message:error.message
        });

    }

}
const downloadResume = async (req, res) => {
    try {
        const { id } = req.params;

        const application = await careerModel.findById(id);

        if (!application) {
            return res.status(404).json({
                success: false,
                message: "Application not found"
            });
        }

        const response = await axios.get(application.resume, {
            responseType: "stream"
        });

        res.setHeader(
            "Content-Disposition",
            `attachment; filename="${application.fullName}-Resume.pdf"`
        );

        res.setHeader(
            "Content-Type",
            response.headers["content-type"]
        );

        response.data.pipe(res);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
export {
    submitApplication,
    listApplications,
    deleteApplication,
    updateStatus, downloadResume
}