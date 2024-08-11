import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    noOfDays: { 
        type: Number, 
        required: true,
    },
    borrower: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['requested', 'accepted', 'waiting_pickup', 'pickedup', 'inuse', 'returned', 'closed'], 
        default: 'requested' 
    },
    transactions:{ 
        type: Number, 
        default: 0
    },
    pickupOTP: { 
        type: String,
        default: ""
    },
    returnOTP: { 
        type: String,
        default: ""
    }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
