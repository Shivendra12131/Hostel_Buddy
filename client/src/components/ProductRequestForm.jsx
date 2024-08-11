import { Button, Input, Tooltip } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { fetchUser } from '../utility/userLocalStorage';
import { fetchToken } from '../utility/jwtLocalStorage';
import { postDataFromApi } from '../utility/api';

const ProductRequestForm = ({ productData, setErrorToast, setCheckRequests }) => {
	const [noOfDays, setNoOfDays] = useState(0);
	const [jwtToken, setJwtToken] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userData, setUserData] = useState(false);
	const [requesting, setRequesting] = useState(false);


	// var jwtToken = fetchToken();
	// var isAuthenticated = !!jwtToken
	// var userData = fetchUser();
	useEffect(() => {
		setJwtToken(prev => fetchToken())
		setIsAuthenticated(prev => !!fetchToken())
		setUserData(prev => fetchUser());
	}, [])

	const handleSubmitRequest = () => {
		if(!isAuthenticated) {
			return setErrorToast("You need to login first")
		}
		if(userData?.email === productData?.owner.email) {
			return setErrorToast("You cannot borrow your own product")
		}

		if(productData?.category.isReturnable && noOfDays <= 0) {
			return setErrorToast("Cannot choose invalid number of days");
		}
		setRequesting(true);
		postDataFromApi('/orders/add', {
			productId: productData?._id,
            noOfDays
		}).then(res => {
			if(res.success) {
				setRequesting(false);
				setCheckRequests(prev => (prev == 0) ? 1 : 0);
			}
		})
	}
	return (
		<div className='w-full h-full flex flex-col'>
			<div className='bg-[#f6f8f9] w-full flex justify-between px-10 py-5'>
				<h1>Enter number of days you want to borrow</h1>
			</div>
			<div className='px-10'>
				<div className='my-10 flex gap-3'>
					{!productData?.category.isReturnable ? (<Tooltip
						content="This item is non-returnable"
						animate={{
							mount: { scale: 1, y: 0 },
							unmount: { scale: 0, y: 25 },
						}}
					>
						<Input
							type='number'
							label='Number of Days'
							disabled={!productData?.category.isReturnable}
						/>
					</Tooltip>) : (
						<Input
							type='number'
							label='Number of Days'
							value={noOfDays}
							onChange={(e) => setNoOfDays(e.target.value)}
						/>
					)}
				</div>
				<div className='w-full bg-[#fffae5] py-3 px-5 text-sm text-[#1d242d] border border-[#ffe578] rounded-lg'>
					Your request will be accepted by owner only
				</div>
			</div>
			<div className='mt-auto'>
				<div className='float-right m-5 flex gap-5'>
					<Button onClick={handleSubmitRequest} loading={requesting} className='bg-[#350145] capitalize w-28 text-sm py-2'>Request</Button>
				</div>
			</div>
		</div>
	)
}

export default ProductRequestForm