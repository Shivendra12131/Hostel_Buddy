import Order from "../models/order.js";


export const addOrder = async (req, res) => {
    try {
        const { 
            productId,
            noOfDays
        } = req.body

        const order = await Order.create({
            product: productId,
            noOfDays,
            borrower: req.user._id
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            error: "Internal Server Error"
        })
    }
}