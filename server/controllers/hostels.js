import Hostel from '../models/hostel.js';

export const getAllHostels = async (req, res) => {
    try {
        const hostels = await Hostel.find();
        res.status(200).json({
            success: true,
            hostels
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: "Internal Server Error" 
        });
    }
};

export const createHostel = async (req, res) => {
    const { name, isInsideCampus } = req.body;
    
    const newHostel = new Hostel({
        name,
        isInsideCampus
    });

    try {
        const savedHostel = await newHostel.save();
        res.status(201).json(savedHostel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};