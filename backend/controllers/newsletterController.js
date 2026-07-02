import newsletterModel from "../models/newsletterModel.js";
import sendTelegramMessage from "../utils/telegram.js";
import { subscriberNotification } from "../utils/telegramTemplates.js";

// Subscribe to newsletter

const subscribeNewsletter = async (req, res) => {

    try {

        const { email } = req.body;

        if (!email) {
            return res.json({
                success: false,
                message: "Email is required"
            });
        }

        // Check if already subscribed

        const existingEmail = await newsletterModel.findOne({ email });

        if (existingEmail) {
            return res.json({
                success: false,
                message: "Email already subscribed"
            });
        }

        // Save subscriber

        const subscriber = new newsletterModel({
            email
        });

        await subscriber.save();
        await sendTelegramMessage(subscriberNotification(subscriber));

        res.json({
            success: true,
            message: "Subscribed Successfully"
        });

    }

    catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: error.message
        });

    }

}


// List all subscribers (Admin)

const listSubscribers = async (req, res) => {

    try {

        const subscribers = await newsletterModel
            .find({})
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            subscribers
        });

    }

    catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: error.message
        });

    }

}


// Delete subscriber

const deleteSubscriber = async (req, res) => {

    try {

        await newsletterModel.findByIdAndDelete(req.body.id);

        res.json({
            success: true,
            message: "Subscriber Removed"
        });

    }

    catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: error.message
        });

    }

}


export {
    subscribeNewsletter,
    listSubscribers,
    deleteSubscriber
}