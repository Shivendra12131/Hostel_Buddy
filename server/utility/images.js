// import { v2 as cloudinary } from 'cloudinary';
// import Datauri from 'datauri/parser.js';
// import path from 'path'
// import Pin from '../models/pin.js';
// import uuid4 from 'uuid4';
// import Product from '../models/product.js';

// const dUri = new Datauri();


// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET
// });



// export const uploadImageToCloud = async (files) => {
//     const file = dUri.format(path.extname(files[0].originalname).toString(), files[0].buffer).content

//     let photoAlbum = "empty"

//     const uuid = uuid4()

//     const promises = [file].map((img) => {
//         return cloudinary.uploader.upload(
//             img,
//             {
//                 resource_type: "image",
//                 public_id: uuid,
//             }).then((result) => {
//                 photoAlbum = result.url
//             }).catch((err) => {
//                 console.log("uploadImageToCloud: ", err);
//             });
//     });

//     await Promise.all(promises);

//     return {
//         url: photoAlbum,
//         photoId: uuid
//     };
// }


// export const deleteImageFromCloud = async (req, res, next) => {
//     const { _id } = req.body
//     const pin = await Pin.findById(_id)

//     const promises = [1].map(() => {

//         return cloudinary.uploader.destroy(
//             pin.imageId).then((result) => {
//                 console.log("deleted")
//             }).catch((err) => {
//                 console.log(err)
//             });
//     });

//     await Promise.all(promises);

//     const { save, comments } = pin;

//     if (save.length > 0) {
//         await Save.deleteMany({ _id: { $in: save } });
//     }

//     if (comments.length > 0) {
//         await Comment.deleteMany({ _id: { $in: comments } });
//     }

//     await Pin.findByIdAndDelete(_id)

//     res.status(204).json({
//         success: true,
//         message: "Successfully deleted"
//     })
// }

import { UploadClient } from '@uploadcare/upload-client';

const apiUrl = 'https://api.uploadcare.com';
const client = new UploadClient({ publicKey:  process.env.UPLOAD_CARE_PUBLIC_KEY});

export const uploadImage = async (files) => {
    try {
        const uploadPromises = files.map(file =>
            client.uploadFile(file.buffer, {
                contentType: file.mimetype
            })
        );
        
    
        const uploadedFiles = await Promise.all(uploadPromises);
        
        const imageUrls = uploadedFiles.map(file => 
            `${file.cdnUrl}-/preview/600x800/-/format/auto/-/quality/smart/`
        );

        
        return {
            success: true,
            url: imageUrls[0]
        };
    } catch (error) {
        console.error('Error in uploadImages function:', error.message);
        console.error('Full error object:', error);
        return {
            success: false,
            message: 'Error uploading images.',
            error: error.message
        };
    }
}


export const deleteFile = async (fileUUID) => {
    try {
        const response = await axios.delete(`${apiUrl}/files/${fileUUID}/`, {
            headers: {
                'Authorization': `Basic ${Buffer.from(`${process.env.UPLOAD_CARE_PUBLIC_KEY}:${process.env.UPLOAD_CARE_SECRET_KEY}`).toString('base64')}`
            }
        });
        
        console.log('File deleted successfully:', response.data);
        return {
            success: true,
            message: 'File deleted successfully.'
        };
    } catch (error) {
        console.error('Error deleting file:', error.message);
        console.error('Full error object:', error);
        return {
            success: false,
            error: 'Error deleting file'
        };
    }
};