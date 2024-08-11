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




import { Button, Card, Checkbox, Input, Option, Select, Textarea } from '@material-tailwind/react'
import { MdAdd } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { getDataFromApi, postDataFromApi } from '../utility/api'
import Toast from '../components/Toasts/Toast';
// import { handleImageCompression } from '../utility/routineFunctions'



const ProductForm = () => {


	const [formData, setFormData] = useState({
		category: "",
		description: "",
		images: "",
		title: "",
	});


	const [categories, setCategories] = useState([]);
	const [otherCategory, setOtherCategory] = useState(false);

	const [newCategory, setNewCategory] = useState({
		title: '',
		isReturnable: false
	})



	const [image, setImage] = useState(null);
	const [imagePreviewUrl, setImagePreviewUrl] = useState("");


	const [formSubmitLoading, setFormSubmitLoading] = useState(false);


	const [open, setOpen] = useState(false);
	const [toastType, setToastType] = useState("");
	const [toastMessage, setToastMessage] = useState({
		title: "",
		description: ""
	})
	const handleOpen = () => setOpen((cur) => !cur);

	useEffect(() => {
		getDataFromApi('/categories/all')
			.then((data) => {
				setCategories(data.categories)
			})
			.catch((err) => {
				console.log(err);
			})
	}, [])

	const setErrorToast = (desc) => {
		setToastMessage({ title: "Error", description: desc })
		setToastType("error")
		handleOpen();
	}

	const setSuccessToast = () => {
		setToastMessage({ title: "Added Successfully", description: "" })
		setToastType("success")
		handleOpen();
	}



	const handleFormChange = (event) => {
		const name = event.target.name;

		setFormData({ ...formData, [name]: event.target.value });
	}



	const handleImageChange = (event) => {
		if (event.target.files[0]) {
			const selectedFile = event.target.files[0];
			const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
			if (allowedTypes.includes(selectedFile.type)) {
				setImage(selectedFile);
				const reader = new FileReader();
				reader.onloadend = () => {
					setImagePreviewUrl(reader.result);
				};
				reader.readAsDataURL(selectedFile);
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
			const formData = new FormData();
			formData.append('image', image);

			postDataFromApi('/images/upload', formData)
				.then(data => {
					setFormData(prev => ({
						...prev,
						images: data.url
					}))
				})
		} catch (error) {
			console.error("Error uploading image", error);
		}
	};


	const clearAllField = () => {
		setFormData({
			category: "",
			description: "",
			images: "",
			title: "",
		})
		setImagePreviewUrl("")
	}


	const handleSubmit = async () => {
		try {
			if (otherCategory) {
				if (newCategory.title === "") {
					console.log("Empty category")
					return;
				}
				setFormSubmitLoading(true)
				postDataFromApi('/categories/add', newCategory)
					.then(dt => {
						if (dt.success) {
							formData.category = dt.newCategory._id;

							const fd = new FormData();
							fd.append('image', image);

							postDataFromApi('/images/upload', fd)
								.then(res => {
									formData.images = res.url
									postDataFromApi('/products/add', { productData: formData })
										.then((data) => {
											console.log(data);
											setFormSubmitLoading(false);
											setSuccessToast();
										})
										.catch((err) => {
											setFormSubmitLoading(false);
											setErrorToast("Some error occurred");
											console.log(err)
										})
								})

						}
					})
			} else {
				console.log(formData)
				setFormSubmitLoading(true)
				const fd = new FormData();
				fd.append('image', image);

				postDataFromApi('/images/upload', fd)
					.then(res => {
						formData.images = res.url
						postDataFromApi('/products/add', { productData: formData })
							.then((data) => {
								console.log(data);
								setFormSubmitLoading(false);
								setSuccessToast();
							})
							.catch((err) => {
								setFormSubmitLoading(false);
								console.log(err)
							})
					})
			}
		} catch (err) {
			setFormSubmitLoading(false);
			console.error("Error during image upload or form submission:", err);
		}
	};


	const handleCancel = () => {

	}




	return (
		<div className='px-72 py-5 bg-bgGray1'>
			<Toast type={toastType} message={toastMessage} open={open} handleOpen={handleOpen} />
			<Card className='w-full h-auto p-10'>
				<h1 className='font-bold'>Add New Product</h1>
				<div className='w-full'>
					<div className='gap-5'>
						<div className='w-fit mb-5'>
							<Select
								label="Select category"
								name="category"
								onChange={(e) => setFormData({
									...formData,
									category: e
								})}
								disabled={otherCategory}
							>
								{categories.map((cat) => (
									<Option value={cat._id}>{cat.title}</Option>
								))}
							</Select>
						</div>
						<div>
							<Checkbox
								label="Other"
								name='otherCategory'
								onChange={(e) => setOtherCategory(e.target.checked)}
							/>
						</div>
						<div className='mt-3'>
							{otherCategory && (
								<Input
									label='Other category'
									value={newCategory.title}
									onChange={(e) => setNewCategory({
										...newCategory,
										title: e.target.value
									})}
								/>
							)}
						</div>
						{otherCategory && (<div>
							<Checkbox
								label="Is Returnable ?"
								name='isReturnable'
								checked={newCategory.isReturnable}
								onChange={(e) => setNewCategory({
									...newCategory,
									isReturnable: e.target.checked
								})}
							/>
						</div>)}
					</div>
					<div className='mt-7 gap-5'>
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
						<div className='flex-1 mt-5'>
							<label className='text-[15px] text-blue-gray-900 block'>Product description</label>
							<textarea
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
					<label className='text-[15px] text-blue-gray-900 block'>Add image</label>

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
								onChange={handleImageChange}
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
					<Button onClick={handleSubmit} loading={formSubmitLoading} color='green' className='capitalize w-28 text-sm py-2'>Save</Button>
				</div>
			</Card>
		</div>
	)
}

export default ProductForm