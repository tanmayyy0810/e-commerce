import jwt from 'jsonwebtoken'

const deliveryAuth=async(req,res,next)=>{
    try {
        console.log("Delivery middleware reached");
console.log(req.headers.token);
        const {token}=req.headers
        if(!token){
            return res.json({success:false, message:"Not Authorized Login Again"})
        }
        const token_decode=jwt.verify(token,process.env.JWT_SECRET);
        if(token_decode!==process.env.DELIVERY_EMAIL+process.env.DELIVERY_PASSWORD){
            return res.json({success:false, message:"Not Authorized Login Again"})
        }
        next()


    } catch (error) {
        console.log(error)
        res.json({success: false,message: error.message})
    }
}
export default deliveryAuth