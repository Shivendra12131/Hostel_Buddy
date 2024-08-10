import { Input, Button } from '@material-tailwind/react'
import React from 'react'

const ProductRequestStatus = () => {
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
            <Button color='red' className='capitalize text-sm float-right m-5'>Cancel Request</Button>
        </div>
    </div>
  )
}

export default ProductRequestStatus