import express from "express";
import adminAuth from "../middleware/adminAuth.js";

import {
    subscribeNewsletter,
    listSubscribers,
    deleteSubscriber
} from "../controllers/newsletterController.js";

const newsletterRouter = express.Router();

// User subscribes
newsletterRouter.post(
    "/subscribe",
    subscribeNewsletter
);

// Admin gets all subscribers
newsletterRouter.post(
    "/list",
    adminAuth,
    listSubscribers
);

// Admin deletes subscriber
newsletterRouter.post(
    "/delete",
    adminAuth,
    deleteSubscriber
);

export default newsletterRouter;