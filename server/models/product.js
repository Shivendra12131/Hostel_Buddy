import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
    owner: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    images: {
        type: String,
        required: true
    },
    borrower: { 
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
    category: { 
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true 
    }
  }, { timestamps: true });


const Product = mongoose.model('Product', productSchema);

export default Product;
