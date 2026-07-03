import express from 'express';
import { loginUser,registerUser,adminLogin, getProfile, deliveryLogin , forgotPassword, resetPassword} from '../controllers/userController.js';
import auth from "../middleware/auth.js";
const userRouter=express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/forgot-password', forgotPassword)
userRouter.post("/reset-password", resetPassword);
userRouter.post('/admin', adminLogin)
userRouter.post('/delivery', deliveryLogin)
userRouter.get("/profile", auth, getProfile);

userRouter.get("/test", (req, res) => {
    res.send("User route is working");
});

export default userRouter;
