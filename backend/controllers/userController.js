import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import crypto from "crypto";
import { sendMail } from "../config/mail.js";



const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}
//route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: " User does not Exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: 'Invalid credentials' })
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }


}

// route for user register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //checking user alr exists or not
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: " User Already Exists" })
        }
        // validating email and strng pw
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: " Please enter a valid email" })

        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please Enter a strong password" })
        }
        //hashing user pw

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({

            name, email,
            password: hashedPassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)

        res.json({ success: true, token })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }

}

//route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token=jwt.sign(email+password,process.env.JWT_SECRET);
            
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid Credentials" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }


}

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await userModel.findOne({ email });

        // Don't reveal whether the email exists
        if (!user) {
            return res.json({
                success: true,
                message: "If an account exists, a password reset link has been sent."
            });
        }

        // Generate token
        const resetToken = crypto.randomBytes(32).toString("hex");

        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;

        await user.save();

        // Create reset link
        const frontendUrl = (process.env.FRONTEND_URL || req.headers.origin || "").replace(/\/$/, "");
        if (!frontendUrl) {
            throw new Error("Frontend URL is not configured");
        }
        const resetLink = `${frontendUrl}/reset-password/${resetToken}`;

        // Send email
        await sendMail({
            to: user.email,
            subject: "Reset Your Password | Shri Balaji Foods",
            html: `
                <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;">
                    <h2>Password Reset Request</h2>

                    <p>Hello <b>${user.name}</b>,</p>

                    <p>We received a request to reset your password.</p>

                    <p>
                        <a href="${resetLink}"
                           style="display:inline-block;background:#198754;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;">
                            Reset Password
                        </a>
                    </p>

                    <p>Or copy this link:</p>

                    <p>${resetLink}</p>

                    <hr>

                    <p>This link expires in <b>15 minutes</b>.</p>

                    <p>If you didn't request this, simply ignore this email.</p>

                </div>
            `
        });

        return res.json({
            success: true,
            message: "Password reset link sent successfully."
        });

    } catch (error) {
        console.log("Password reset email error:", error.message);

        return res.json({
            success: false,
            message: "Unable to send password reset email right now. Please try again in a few minutes."
        });
    }
};

//reset password route
const resetPassword = async (req, res) => {
    try {
        const { token, password } = req.body;

        // Find user with this reset token
        const user = await userModel.findOne({
            resetPasswordToken: token
        });

        if (!user) {
            return res.json({
                success: false,
                message: "Invalid or expired reset link."
            });
        }

        // Check expiry
        if (user.resetPasswordExpires < Date.now()) {
            return res.json({
                success: false,
                message: "Reset link has expired."
            });
        }

        // Validate password
        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Password must be at least 8 characters."
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save new password
        user.password = hashedPassword;

        // Clear reset fields
        user.resetPasswordToken = "";
        user.resetPasswordExpires = null;

        await user.save();

        res.json({
            success: true,
            message: "Password reset successfully."
        });

    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: error.message
        });
    }
};

//route for Delivery login
const deliveryLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email === process.env.DELIVERY_EMAIL && password === process.env.DELIVERY_PASSWORD) {
            const token=jwt.sign(email+password,process.env.JWT_SECRET);
            
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid Credentials" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }


}
const getProfile = async (req, res) => {
    try {

        const user = await userModel
            .findById(req.body.userId)
            .select("-password");

        if (!user) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }

        res.json({
            success: true,
            user
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

export { loginUser, registerUser, adminLogin, getProfile , deliveryLogin, forgotPassword, resetPassword }
