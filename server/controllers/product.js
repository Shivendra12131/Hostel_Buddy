import Product from "../models/product.js";
import mongoose from 'mongoose';
// import User from './models/User';
import User from '../models/user.js';
import Hostel from '../models/hostel.js';
import { pagination } from "../utility/pagination.js";
// Define the function to get products metadata

export const getProductsMetadata = async (req, res) => {
    try {
        const { page = 2 , selectedCategories , search } = req.query;
        console.log("selectedCategories - ",selectedCategories);
        const categoryIds = selectedCategories ? selectedCategories
            .map(cat => cat._id)
            .filter(id => mongoose.Types.ObjectId.isValid(id)) 
            .map(id => new mongoose.Types.ObjectId(id)) : []; 

        let query = categoryIds.length > 0 ? { category: { $in: categoryIds } } : {};
        let products = await Product.find(query)
            .populate({
                path: 'owner', // Populate the owner field
                select: 'name profileImage hostel', // Select the owner's name, profileImage, and hostel
                populate: {
                    path: 'hostel', // Populate the hostel field in User model
                    select: 'name' // Select only the name field from the Hostel model
                }
            })
            .exec();


            if (search) {
                const regex = new RegExp(search, 'i'); // Case-insensitive regex for search
                products = products.filter(product => 
                    regex.test(product?.owner?.name) || 
                    regex.test(product?.owner?.hostel?.name)||
                    regex.test(product?.title)
             ); 
            }   

        const totalProducts = await Product.countDocuments();

        const finalProduct = await pagination(products,page)

        console.log(finalProduct);

        return res.status(200).json({
            success: true,
            page: finalProduct?.page,
            totalPages:finalProduct?.totalPage,
            limit:finalProduct?.pageSize,
            numberOfProducts:finalProduct?.numberOfProducts,
            products:finalProduct?.data
        });
    } catch (error) {
        console.error('Error fetching products metadata:', error);
        return res.status(500).json({ message: 'Unable to fetch products metadata', error: error.message });
    }
};

// owner name owener hostelname profile image prduct image owner id owner iamge woner profile owner prifle description title id

export const addProduct = async (req, res) => {
    try {
        const {productData} = req.body

        if (!productData || !productData.title || !productData.category) {
            return res.status(400).json({
                success: false,
                error: "Missing entries"
            });
        }
        productData.owner = req.user._id;

        const product = await Product.create(productData);


        res.status(200).json({
            success: true,
            productData: product
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        })
    }
}


export const editProduct = async (req, res) => {
    try {
        const { productData, productId } = req.body
        if (
            !productData.title ||
            !productData.category_id
        ) {
            return res.status(400).json({
                success: false,
                error: "Missing entries"
            })
        }

        const response = await uploadImage(req.files);

        if (!response.success) {
            throw new Error("Failed to upload image")
        }

        productData.images = response.urls;
        productData.owner = req.user._id;

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
        
        if (!productId) {
            return res.status(403).json({
                success: false,
                error: "Bad request"
            })
        }
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                error: "Product not found"
            })
        }

        if (product.owner_id != req.user._id) {
            return res.status(403).json({
                success: false,
                error: "Your are not authorized to delete this product"
            })
        }

        await Product.findByIdAndDelete(productId)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        })
    }
}

export const getProductDesc = async (req, res) => {
    try {
        const { productId } = req.query

        if(productId === "") {
            return res.status(400).json({
                success: false,
                error: "Missing product id"
            })
        }

        const product = await Product.findById(productId)
            .populate({
                path: 'owner',
                populate: {
                    path: 'hostel',  
                }
            })
            .populate({
                path: 'borrower',
                populate: {
                    path: 'hostel',
                }
            })
            .populate('category');
        

        return res.status(200).json({
            success: true,
            productData: product
        })
    } catch (err) {
        console.log(err)
    }
}


export const getMyProduct = async (req, res) => {
    try {

    } catch (error) {

    }
}