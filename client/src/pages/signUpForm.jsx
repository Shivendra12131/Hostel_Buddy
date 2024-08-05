/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
  Button
} from '@material-tailwind/react';

const SignUpForm = ({open, setOpen}) => {
  const [formData, setFormData] = useState({
    batchYear: '',
    hostel: '',
    phone: '',
    whatsApp: '',
    room: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    // Handle form submission
    setOpen(false);
  };

  return (
    <div>
{/*       <Button color="blue" onClick={() => setOpen(true)}> */}
{/*         Sign Up */}
{/*       </Button> */}
      <Dialog open={open} handler={setOpen} >
        <DialogHeader className="bg-black text-white rounded-t-lg">Complete your profile</DialogHeader>
        <DialogBody>
          <div className="mb-4">
            <Select
              label="Batch Year"
              name="batchYear"
              value={formData.batchYear}
              onChange={handleChange}
            >
              <Option value="2021">2021</Option>
              <Option value="2022">2022</Option>
              <Option value="2023">2023</Option>
              <Option value="2024">2024</Option>  
            </Select>
          </div>
          <div className="mb-4">
            <Select
              label="Hostel"
              name="hostel"
              value={formData.hostel}
              onChange={handleChange}
            >
              <Option value="Hostel 1">Manimala</Option>
              <Option value="Hostel 2">Shayadri</Option>
              <Option value="Hostel 3">Minachil</Option>
              <Option value="Hostel 4">Girls Hostel</Option>              
            </Select>
          </div>
          <div className="mb-4">
            <Input
              type="text"
              label="Phone No.(WhatsApp)"
              name="whatsApp"
              value={formData.whatsApp}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <Input
              type="text"
              label="Room No."
              name="room"
              value={formData.room}
              onChange={handleChange}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button color="red" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <p>&nbsp;&nbsp;</p>
          <Button color="green" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </Dialog></div>
  );
};

export default SignUpForm;
