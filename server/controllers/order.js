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

        return res.status(200).json({
            success: true,
            message: "Requested successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            error: "Internal Server Error"
        })
    }
}

export const cancelProductRequest = async (req, res) => {
    try {
        const userId = req.user._id;
        const { productId } = req.query;

        const deletedOrder = await Order.findOneAndDelete({
            borrower: userId,
            product: productId,
            status: 'requested' 
        });

        if (!deletedOrder) {
            return res.status(404).json({
                success: false,
                message: "No requested order found for the specified user and product"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Requested order has been cancelled successfully"
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            error: "Internal Server Error"
        })
    }
}