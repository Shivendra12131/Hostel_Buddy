import Category from '../models/category.js'

const getAllCategories = async(req, res) => {
    try {
        
    } catch (error) {
        console.log(err)
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        })
    }
}