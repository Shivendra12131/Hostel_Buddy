/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
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
import { getDataFromApi, postDataFromApi } from '../utility/api';

const SignUpForm = ({ open, setOpen, userData }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		batchYear: '',
		hostel: '',
		phone: '',
		room: '',
		profileImage: ''
	});

	const [loading, setLoading] = useState(false);

	const [hostels, setHostels] = useState([]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};


	useEffect(() => {
		getDataFromApi('/hostels/all').then((data) => {
			setHostels(data.hostels);
		})
	}, [])



	const handleSubmit = () => {
		formData.name = userData.name;
		formData.profileImage = userData.picture;
		formData.email = userData.email;
		
		if(
			formData.batchYear === "" || 
			formData.email === "" ||
			formData.phone === "" ||
			formData.room === "" ||
			formData.name === "" ||
			formData.hostel === ""
		) {
			console.log("Fill up the form first");
		} else {
			setLoading(true);
			postDataFromApi('/users/signup', {userData: formData})
				.then((data) => {
					console.log(data);
					localStorage.setItem('jwt', data.token);
					localStorage.setItem('user', JSON.stringify(data.user));
					setLoading(false);
					setOpen(false);
				})
				.catch((err) => console.log(err))
		}
	};

	return (
		<div>
			<Dialog open={open} handler={setOpen} >
				<DialogHeader className="bg-[#350145] text-white rounded-t-lg">Complete your profile</DialogHeader>
				<DialogBody>
					<div className="mb-4">
						<Input 
							label='Batch Year' 
							onChange={handleChange}
							name='batchYear'
							value={formData.batchYear}
						/>
					</div>
					<div className="mb-4">
						<Select
							label="Hostel"
							name="hostel"
							value={formData.hostel}
							onChange={(e) => setFormData({
								...formData,
								hostel: e
							})}
						>
							{hostels.map((hostel) => (
								<Option value={hostel._id}>{hostel.name}</Option>
							))}
						</Select>
					</div>
					<div className="mb-4">
						<Input
							type="text"
							label="Phone No.(WhatsApp)"
							name="phone"
							value={formData.phone}
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
					<Button color="pink" onClick={() => {setOpen(false); setFormData({})}}>
						Cancel
					</Button>
					<p>&nbsp;&nbsp;</p>
					<Button color="green" onClick={handleSubmit} loading={loading}>
						Submit
					</Button>
				</DialogFooter>
			</Dialog></div>
	);
};

export default SignUpForm;
