import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderSchema = new Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    noOfDays: { 
        type: Number, 
        required: true,
    },
    borrower_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['pending', 'approved', 'rejected', 'returned'], 
        default: 'pending' 
    },
    transactions:[{ 
        type: String, 
        default: "" 
    }],
    pickupOTP: { 
        type: String,
    },
    returnOTP: { 
        type: String,
    }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
