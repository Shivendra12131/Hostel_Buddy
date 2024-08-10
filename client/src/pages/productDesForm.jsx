// import React, { useState } from 'react';
// import {
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   Input,
//   Textarea,
//   Select,
//   Option,
//   Button
// } from '@material-tailwind/react';

// const ProductForm = () => {
//   const [open, setOpen] = useState(true);
//   const [formData, setFormData] = useState({
//     productImage: '',
//     description: '',
//     title: '',
//     category: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//     setOpen(false); // Close the dialog on form submission
//   };

//   return (
//     <div className="flex bg-gray-300">
//       {/* <Button color="blue" onClick={() => setOpen(true)}>
//         Add Product
//       </Button> */}
//       <Dialog open={open} handler={setOpen} className="max-w-xl mx-auto">
//         <DialogHeader className='bg-black text-white rounded-t-lg'>Product Information</DialogHeader>
//         <DialogBody>
//           <form className="w-full" onSubmit={handleSubmit}>
//             <div className="mb-5">
//               <Input
//                 type="file"
//                 name="productImage"
//                 label="Product Image"
//                 onChange={(e) => setFormData({ ...formData, productImage: e.target.files[0] })}
//                 className='pb-8'
//               />
//             </div>

//             <div className="mb-4">
//               <Input
//                 type="text"
//                 name="title"
//                 label="Title"
//                 value={formData.title}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-4">
//               <Textarea
//                 name="description"
//                 label="Description"
//                 value={formData.description}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-4">
//               <Select
//                 name="category"
//                 label="Category"
//                 value={formData.category}
//                 onChange={(value) => setFormData({ ...formData, category: value })}
//               >
//                 <Option value="Electronics">Electronics</Option>
//                 <Option value="Fashion">Fashion</Option>
//                 <Option value="Home">Home</Option>
//                 <Option value="Books">Books</Option>
//                 <Option value="Other">Other</Option>
//               </Select>
//             </div>

//             <Button type="submit" className="w-full bg-black">
//               Submit
//             </Button>
//           </form>
//         </DialogBody>
//         <DialogFooter>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// };

// export default ProductForm;




import { Button, Card, Checkbox, Option, Select } from '@material-tailwind/react'
import { MdAdd } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { getDataFromApi, postDataFromApi } from '../utility/api'
// import { handleImageCompression } from '../utility/routineFunctions'



const ProductForm = () => {
	const initialForm = {
		category: "",
		deposit: "",
		description: "",
		media: "",
		title: "",
	}


	const [formData, setFormData] = useState(initialForm);


	const [categories, setCategories] = useState([]);
	const [subcategories, setSubcategories] = useState([]);
	const [categoriesData, setCategoriesData] = useState([]);

	const [image, setImage] = useState("");
	const [imagePreviewUrl, setImagePreviewUrl] = useState("");


	const [formSubmitLoading, setFormSubmitLoading] = useState(false);

	useEffect(() => {
		getDataFromApi('/categories/all')
			.then((data) => {
				
			})
			.catch((err) => {
				console.log(err);
			})
	}, [])



	const handleFormChange = (event) => {
		const name = event.target.name;

		setFormData({ ...formData, [name]: event.target.value });
	}



	const handleImageChange = (event) => {
		if (event.target.files[0]) {
			const selectedFile = event.target.files[0];
			const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
			if (allowedTypes.includes(selectedFile.type)) {

			} else {
				console.log('Please select a valid image file (JPEG, PNG, or GIF)');
			}
		}
	};

	const handleUpload = async () => {
		if (!image) {
			console.log("Empty image file");
			return;
		}

		try {
			
		} catch (error) {
			console.error("Error uploading image", error);
		}
	};


	const clearAllField = () => {
		setFormData(initialForm)
		setImagePreviewUrl("")
	}


	const handleSubmit = async () => {
		try {
			if (
				formData.category === "" ||
				formData.title === ""
			)
				return;

			setFormSubmitLoading(true);

			postDataFromApi('/products/add', {
				productData: formData
			}).then(() => {

			});

			console.log(formData)
		} catch (err) {
			console.error("Error during image upload or form submission:", err);
		}
	};


	const handleCancel = () => {

	}




	return (
		<div className='px-28 py-5 bg-bgGray1'>
			<Card className='w-full h-auto p-10'>
				<h1>Add New Product</h1>
				<div className='w-full'>
					<Checkbox
						label="Is it Give away?"
						name='isGiveAway'
						onChange={handleFormChange}
					/>
					<div className='flex gap-5'>
						<div>
							<label className='text-[15px] text-blue-gray-900'>Category of product</label>
							{/* <Select
								className='w-72'
								placeholder='--Select category-'
							/> */}
						</div>
						<div>
							<label className='text-[15px] text-blue-gray-900'>Subcategory of product</label>
							{/* <Select
								className='w-72'
								placeholder='--Select subcategory-'
							/> */}
						</div>
					</div>
					<div className='flex mt-7 gap-5'>
						<div>
							<label className='text-[15px] text-blue-gray-900 block'>Name of product</label>
							<input
								className='w-72 border-[1px] rounded-lg px-5 py-2 border-[#e9ebed]'
								placeholder='Enter the name of product'
								name='title'
								value={formData.title}
								onChange={handleFormChange}
							/>
						</div>
						<div className='flex-1'>
							<label className='text-[15px] text-blue-gray-900 block'>Product description</label>
							<input
								className='w-full border-[1px] rounded-lg px-5 py-2 border-[#e9ebed]'
								placeholder='Description of product'
								name='description'
								value={formData.description}
								onChange={handleFormChange}
							/>
						</div>
					</div>
				</div>
				
				<div className='w-full mt-5'>
					<label className='text-[15px] text-blue-gray-900 block'>You can add up-to 3 images</label>

					<div className="flex justify-start gap-5 items-center">
						<label class={`bg-[#f6f8f9] overflow-hidden text-blue relative rounded-lg flex items-center justify-center border-dashed border-[#a3adbb] tracking-wide text-center uppercase border border-blue w-44 h-44 cursor-pointer hover:bg-blue my-5`} >
							{imagePreviewUrl == "" && (
								<div className='flex flex-col items-center capitalize justify-center'>
									<MdAdd size={20} />
									Add image
								</div>
							)}
							<input
								type="file"
								accept="image/*"
								name='image.0'
								className="hidden"
							/>
							{imagePreviewUrl != "" && (
								<img
									src={imagePreviewUrl}
									alt='image'
									className='object-cover object-center'
								/>
							)}
						</label>
					</div>
				</div>

				<div className='flex justify-end gap-5 items-center'>
					<Button variant='outlined' color='green' className='capitalize w-28 text-sm py-2'>Cancel</Button>
					<Button onClick={handleSubmit} color='green'  className='capitalize w-28 text-sm py-2'>Save</Button>
				</div>
			</Card>
		</div>
	)
}

export default ProductForm