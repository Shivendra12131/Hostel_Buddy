import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
    owner_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    images: [{
        type: String
    }],
    borrower_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        default: null
    },
    title: { 
        type: String, 
        required: true
    },
    description: { 
        type: String,
        default: ""
    },
    category_id: { 
        type: Schema.Types.ObjectId,
        required: true 
    }
  }, { timestamps: true });


const Product = mongoose.model('Product', productSchema);

export default Product;
