import express from "express";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

import { submitApplication, listApplications, deleteApplication, updateStatus, downloadResume } from "../controllers/careerController.js";

const careerRouter = express.Router();
careerRouter.post(
    "/apply",
    upload.single("resume"),
    submitApplication
);

careerRouter.post(
    "/list",
    adminAuth,
    listApplications
);

careerRouter.post(
    "/delete",
    adminAuth,
    deleteApplication
);

careerRouter.post(
    "/status",
    adminAuth,
    updateStatus
);
careerRouter.get(
    "/download/:id",
    adminAuth,
    downloadResume
);

export default careerRouter;