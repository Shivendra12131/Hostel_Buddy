import Product from "../models/product";
import { uploadImage } from "../utility/images"

export const addProduct = async (req, res) => {
    try {
        const { productData } = req.body
        if(
            !productData.title ||
            !productData.category_id
        ) {
            return res.status(400).json({
                success: false,
                error: "Missing entries"
            })
        }

        const response = await uploadImage(req.files);

        if(!response.success) {
            throw new Error("Failed to upload image")
        } 

        productData.images = response.urls;
        productData.owner_id = req.user._id;

        await Product.create(productData);

        return res.status(200).json({
            success: true,
            message: "Product added successfully"
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        })
    }
}

export const editProduct = async (req, res) => {
    try {
        const { productData, productId } = req.body
        if(
            !productData.title ||
            !productData.category_id
        ) {
            return res.status(400).json({
                success: false,
                error: "Missing entries"
            })
        }

        const response = await uploadImage(req.files);

        if(!response.success) {
            throw new Error("Failed to upload image")
        } 

        productData.images = response.urls;
        productData.owner_id = req.user._id;

        await Product.findByIdAndUpdate(
            productId, 
            { productData }, // The update to apply
            { new: true }, // Options (e.g., return the updated document)
        );
        

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.body
        if(!productId) {
            return res.status(403).json({
                success: false,
                error: "Bad request"
            })
        }
        const product = await Product.findById(productId);

        if(!product) {
            return res.status(404).json({
                success: false,
                error: "Product not found"
            })
        }

        // if(product.owner_id)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        })
    }
}

export const getMyProduct = async (req, res) => {
    try {

    } catch (error) {

    }
}