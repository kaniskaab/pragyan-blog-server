const router = require("express").Router()
const RazorPay=require("razorpay");
const crypto=require("crypto");

router.post("/orders", async(req,res)=>
{
    try{
        const instance = new RazorPay({
            key_id:process.env.RAZOR_PAY_API_KEY,
            key_secret:process.env.RAZOR_PAY_SECRET,
        });

        const options= {
            amount:req.body.amount*100,
            currency:"INR",
            receipt:crypto.randomBytes(10).toString("hex")
        };
        instance.orders.create(options,(error,order)=>
        {
            if(error)
           {
            console.log(error);
            return res.status(500).json({message:"Something Went Wrong!"});
           }
           res.status(200).json({data:order});
        });

    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"})
    }
});

router.post("/verify", async(req,res)=>
{
    try{
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        }=req.body;
        const sign = razorpay_order_id + "|"+razorpay_payment_id;
        const expectedSign= crypto.createHmac("sha256",process.env.RAZOR_PAY_SECRET).update(sign.toString()).digest("hex");
        if(razorpay_signature==expectedSign)
        {
            return res.status(200).json({message:"Payment verified Successfully"})
        }
        else{
            return res.status(400).json({message:"Invalid Signature"});
        }
       
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"})
    }
})
 
module.exports=router