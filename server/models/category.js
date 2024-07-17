import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isReturnable: { 
        type: Boolean, 
        default: true 
    }
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
