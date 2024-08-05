import Product from "../models/product.js";



export const getProductsMetaData = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 10

        const skip = (page - 1) * limit;

        const products = await Product.find()
            .populate({
                path: 'owner',
                select: 'name',
                populate: {
                    path: 'hostel',
                    select: 'name'
                }
            })
            .populate('borrower', 'name')
            .skip(skip)
            .limit(limit)
            .select('images title description owner borrower');

        // const totalProducts = await Product.countDocuments();
        // const totalPages = Math.ceil(totalProducts / limit);

        // const productsMetaData = products.map(product => ({
        //     ownerName: product.owner_id.name,
        //     borrowerId: product.borrower_id?._id || null,
        //     images: product.images,
        //     title: product.title,
        //     description: product.description,
        //     hostelName: product.owner_id.hostel.name
        // }));

        res.status(200).json({
            products
            // page,
            // totalPages,
            // totalProducts,
            // products: productsMetaData
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


export const addProduct = async (req, res) => {
    try {
        const productData = req.body

        if (!productData || !productData.title || !productData.category) {
            return res.status(400).json({
                success: false,
                error: "Missing entries"
            });
        }

        const product = await Product.create(productData);

        res.status(200).json({
            success: true,
            productData: product
        })
    } catch (error) {
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

export const getMyProduct = async (req, res) => {
    try {

    } catch (error) {

    }
}