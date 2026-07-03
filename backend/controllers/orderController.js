// import { currency } from "../../admin/src/App.jsx";
import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js";
import Stripe from "stripe"
// import razorpay from 'razorpay'
import Razorpay from "razorpay";
import { response } from "express";
import transporter from "../config/mail.js";
import sendTelegramMessage from "../utils/telegram.js";
import { orderNotification } from "../utils/telegramTemplates.js";


//global variables
const currency = 'inr'
// const deliveryCharge = amount >= 500 ? 0 : 25;


//gateway initialise
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


//razorpay

// const razorpayInstance = new razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret : process.env.RAZORPAY_KEY_SECRET,
// })

// {/**placing order using cod */}
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const deliveryCharge = amount >= 500 ? 0 : 25;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()

        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()
        await sendTelegramMessage(orderNotification(newOrder));

        console.log("EMAIL_USER =", process.env.EMAIL_USER);
        try {
              console.log("Trying to connect to Gmail SMTP...");

    await transporter.verify();

    console.log("SMTP Verified Successfully");
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: address.email,
        subject: "Order Confirmation | Shri Balaji Foods",
        html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>

body{
    margin:0;
    padding:30px;
    background:#f5f5f5;
    font-family:Arial,Helvetica,sans-serif;
}

.container{
    max-width:700px;
    margin:auto;
    background:white;
    border-radius:12px;
    overflow:hidden;
    box-shadow:0 5px 18px rgba(0,0,0,.12);
}

.header{
    background:#198754;
    color:white;
    text-align:center;
    padding:30px;
}

.header h1{
    margin:0;
    font-size:32px;
}

.header p{
    margin-top:10px;
    font-size:18px;
}

.content{
    padding:35px;
    color:#333;
}

.section-title{
    font-size:20px;
    margin-top:35px;
    margin-bottom:15px;
    color:#198754;
    border-bottom:2px solid #198754;
    padding-bottom:8px;
}

table{
    width:100%;
    border-collapse:collapse;
}

th{
    background:#198754;
    color:white;
}

th,td{
    border:1px solid #ddd;
    padding:12px;
    text-align:left;
}

.summary{
    margin-top:25px;
}

.summary td{
    border:none;
    padding:8px 0;
}

.total{
    font-size:20px;
    font-weight:bold;
    color:#198754;
}

.address{
    background:#f8f8f8;
    padding:18px;
    border-radius:10px;
    line-height:1.8;
}

.footer{
    background:#f8f8f8;
    text-align:center;
    padding:25px;
    color:#555;
    font-size:14px;
}

.social{
    margin-top:20px;
    font-size:16px;
}

</style>
</head>

<body>

<div class="container">

<div class="header">

<h1>🛒 Shri Balaji Foods</h1>

<p>ORDER CONFIRMED ✅</p>

</div>

<div class="content">

<p>Hello <b>${address.firstName} ${address.lastName}</b>,</p>

<p>
Thank you for shopping with
<b>Shri Balaji Foods.</b>

Your order has been placed successfully.
We are preparing it and will notify you once it is shipped.
</p>


<div class="section-title">
📦 Order Details
</div>

<table>

<tr>
<th>Order Date</th>
<td>${new Date().toLocaleDateString()}</td>
</tr>

<tr>
<th>Order ID</th>
<td>${newOrder._id}</td>
</tr>

<tr>
<th>Payment Method</th>
<td>${newOrder.paymentMethod}</td>
</tr>

<tr>
<th>Status</th>
<td>Order Placed</td>
</tr>

</table>


<div class="section-title">
🛍 Products Ordered
</div>

<table>

<tr>
<th>Product</th>
<th>Weight</th>
<th>Qty</th>
<th>Price</th>
</tr>

${items.map(item=>`
<tr>
<td>${item.name}</td>
<td>${item.weights}</td>
<td>${item.quantity}</td>
<td>₹${item.price * item.quantity}</td>
</tr>
`).join("")}

</table>


<table class="summary">

<tr>
<td><b>Subtotal</b></td>
<td style="text-align:right;">₹${amount - deliveryCharge}</td>
</tr>

<tr>
<td><b>Delivery Charges</b></td>
<td style="text-align:right;">₹${deliveryCharge}</td>
</tr>

<tr>
<td class="total">Grand Total</td>
<td class="total" style="text-align:right;">
₹${amount}
</td>
</tr>

</table>


<div class="section-title">
🚚 Delivery Address
</div>

<div class="address">

${address.firstName} ${address.lastName}<br>

${address.street}<br>

${address.city}, ${address.state}<br>

${address.country} - ${address.zipcode}<br><br>

📞 ${address.phone}<br>

📧 ${address.email}

</div>




<div class="section-title">
Need Help?
</div>

<p>

📧 <b>sbfindia@gmail.com</b><br>

📞 <b>+91-XXXXXXXXXX</b><br>

🌐 <b>www.yourwebsite.com</b>

</p>

<div class="section-title">
Follow Us
</div>

<table style="margin-top:15px;">
    <tr>

        <td align="center" style="padding-right:20px;">
            <a href="https://www.instagram.com/your_instagram_username" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                     width="40"
                     alt="Instagram">
            </a>
        </td>

        <td align="center" style="padding-right:20px;">
            <a href="https://www.facebook.com/your_facebook_page" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                     width="40"
                     alt="Facebook">
            </a>
        </td>

        <td align="center">
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                     width="40"
                     alt="WhatsApp">
            </a>
        </td>

    </tr>

    <tr>
        <td align="center">Instagram</td>
        <td align="center">Facebook</td>
        <td align="center">WhatsApp</td>
    </tr>
</table>

</div>

<div class="footer">

<b>Thank you for choosing Shri Balaji Foods ❤️</b>

<br><br>

We look forward to serving you again!

</div>

</div>

</body>
</html>
`
    });

    console.log("Order confirmation email sent.");
} catch (mailError) {
    console.log("Email Error:", mailError.message);
}
        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        res.json({ success: true, message: "Order Placed" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })


    }

}


// {/**placing order using stripe */}
const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers;
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "Stripe",
            payment: false,
            date: Date.now()

        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()
        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: "Deliver Charges"
                },
                unit_amount: deliveryCharge * 100
            },
            quantity: 1

        })
        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: "payment",
        })
        res.json({ success: true, session_url: session.url })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

//verify Stripe

// const verifyStripe = async(req,res)=>{
//     const {orderId, success, userId} = req.body
//     try {
//         if(success==="true"){
//             await orderModel.findByIdAndUpdate(orderId,{payment:true} );
//             await userModel.findByIdAndUpdate(userId,{cartData:{}})
//             res.json({success:true});
//         }else{
//             await orderModel.findByIdAndDelete(orderId)
//             res.json({success:false})
//         }
//     } catch (error) {
//         console.log(error);
//         res.json({success:false, message:error.message})   
//     }
// }


// {/**placing order using razorpay */}
const placeOrderRazorpay = async (req, res) => {
    // try {
    //     const {userId, items, amount, address}=req.body;
    //     const orderData={
    //         userId,
    //         items,
    //         amount,
    //         address,
    //         paymentMethod:"Razorpay",
    //         payment:false,
    //         date:Date.now()

    //     }
    //     const newOrder= new orderModel(orderData)
    //     await newOrder.save()

    //     const options = {
    //         amount : amount*100,
    //         currency: currency.toUpperCase(),
    //         receipt: newOrder._id.toString()
    //     }

    //     await razorpayInstance.orders.create(options, (error, order)=>{
    //         if(error){
    //             console.log(error)
    //             return res.json({success:false, message:error})

    //         }
    //         res.json({success:true, order})

    //     })


    // } catch (error) {
    //     console.log(error);
    //     res.json({success:false, message:error.message}) 

    // }

}

// const verifyRazorpay=

//All orders data for admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

//User Order Data for Frontend
const userOrders = async (req, res) => {

    try {
        const { userId } = req.body

        const orders = await orderModel.find({ userId })

        res.json({ success: true, orders })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })


    }

}

//update Order Status from admin panel
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body
        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({ success: true, message: 'Status Updated' })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }