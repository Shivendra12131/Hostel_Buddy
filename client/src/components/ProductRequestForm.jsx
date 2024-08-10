import { Input } from '@material-tailwind/react'
import React from 'react'

const ProductRequestForm = () => {
  return (
    <div className='w-full h-full'>
        <div className='bg-[#f6f8f9] w-full flex justify-between px-10 py-5'>
            <h1>Select date</h1>
            <p className=''>June 2023</p>
        </div>
        <div className='px-10'>
            <div className='my-10 flex gap-3'>
                <Input 
                    type='date'
                    placeholder='DD/MM/YYYY'
                    label='Start date'
                />
                <Input 
                    type='date'
                    placeholder='DD/MM/YYYY'
                    label='Start date'
                />
            </div>
            <div className='w-full bg-[#fffae5] py-3 px-5 text-sm text-[#1d242d] border border-[#ffe578] rounded-lg'>
                Payment will be calculated based on the date of renting
            </div>
        </div>
    </div>
  )
}

export default ProductRequestForm