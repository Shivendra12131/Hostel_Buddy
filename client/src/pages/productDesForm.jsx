import React, { useState } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Select,
  Option,
  Button
} from '@material-tailwind/react';

const ProductForm = () => {
  const [open, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    productImage: '',
    description: '',
    title: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setOpen(false); // Close the dialog on form submission
  };

  return (
    <div className="flex bg-gray-300">
      {/* <Button color="blue" onClick={() => setOpen(true)}>
        Add Product
      </Button> */}
      <Dialog open={open} handler={setOpen} className="max-w-xl mx-auto">
        <DialogHeader className='bg-black text-white rounded-t-lg'>Product Information</DialogHeader>
        <DialogBody>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
              <Input
                type="file"
                name="productImage"
                label="Product Image"
                onChange={(e) => setFormData({ ...formData, productImage: e.target.files[0] })}
                className='pb-8'
              />
            </div>
            
            <div className="mb-4">
              <Input
                type="text"
                name="title"
                label="Title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-4">
              <Textarea
                name="description"
                label="Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-4">
              <Select
                name="category"
                label="Category"
                value={formData.category}
                onChange={(value) => setFormData({ ...formData, category: value })}
              >
                <Option value="Electronics">Electronics</Option>
                <Option value="Fashion">Fashion</Option>
                <Option value="Home">Home</Option>
                <Option value="Books">Books</Option>
                <Option value="Other">Other</Option>
              </Select>
            </div>
            
            <Button type="submit" className="w-full bg-black">
              Submit
            </Button>
          </form>
        </DialogBody>
        <DialogFooter>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default ProductForm;
