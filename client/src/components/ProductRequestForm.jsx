import { Input } from '@material-tailwind/react'
import React from 'react'

const ProductRequestForm = () => {
  return (
    <div className='w-full h-full'>
        <div className='bg-[#f6f8f9] w-full flex justify-between px-10 py-5'>
            <h1>Enter number of days you want to borrow</h1>
        </div>
        <div className='px-10'>
            <div className='my-10 flex gap-3'>
                <Input 
                    type='number'
                    label='Number of Days'
                />
            </div>
            <div className='w-full bg-[#fffae5] py-3 px-5 text-sm text-[#1d242d] border border-[#ffe578] rounded-lg'>
                Your request will be accepted by owner only
            </div>
        </div>
    </div>
  )
}

export default ProductRequestForm