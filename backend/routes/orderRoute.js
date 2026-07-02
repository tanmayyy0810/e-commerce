import express from 'express'
import  {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
import deliveryAuth from '../middleware/deliveryAuth.js'



const orderRouter= express.Router()

//Admin features
orderRouter.post('/list',adminAuth ,allOrders)
orderRouter.post('/status',adminAuth ,updateStatus)

//Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)


//User Feature
orderRouter.post('/userorders', authUser, userOrders)

//
orderRouter.post('/delivery-list', deliveryAuth, allOrders)

// verify payment
// orderRouter.post('/verifyStripe', authUser, verifyStripe)

export default orderRouter