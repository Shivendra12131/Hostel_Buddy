import { Input, Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import { deleteDataFromApi } from '../utility/api'

const ProductRequestStatus = ({setCheckRequests, id}) => {
    const [cancelling, setCancelling] = useState(false);
    const handleCancelRequest = () => {
        setCancelling(true);
        deleteDataFromApi('/orders/cancel', {productId: id})
            .then((res) => {
                setCancelling(false);
                setCheckRequests(prev => (prev == 0) ? 1 : 0);
            })
    } 
  return (
    <div className='w-full h-full flex flex-col'>
        <div className='bg-[#f6f8f9] w-full flex justify-between px-10 py-5'>
            <h1>Product Requested</h1>
        </div>
        <div className='px-10'>
            <div className='w-full bg-[#fffae5] mt-10 py-3 px-5 text-sm text-[#1d242d] border border-[#ffe578] rounded-lg'>
                Product request has been sent to owner
            </div>
        </div>
        <div className='mt-auto'>
            <Button onClick={handleCancelRequest} loading={cancelling} color='red' className='capitalize text-sm float-right m-5'>Cancel Request</Button>
        </div>
    </div>
  )
}

export default ProductRequestStatus