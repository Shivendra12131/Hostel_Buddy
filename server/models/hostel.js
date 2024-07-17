import mongoose from 'mongoose';

const { Schema } = mongoose;

const hostelSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    isInsideCampus: { 
        type: Boolean,
        default: true,
        required: true 
    }
});

const Hostel = mongoose.model('Hostel', hostelSchema);

export default Hostel;
