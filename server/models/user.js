import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: { 
        type: String, 
        required: true, 
        unique: true
    },
    batchYear: { 
        type: Number, 
        required: true
    },
    hostel: {
        type: Schema.Types.ObjectId, 
        ref: 'Hostel', 
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default: null
    }
}, { timestamps: true });


const User = mongoose.model('User', userSchema);

export default User;
