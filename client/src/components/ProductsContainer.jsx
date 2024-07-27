import { Input, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import ProductCard from './ProductCard'
import ProductCardSkeleton from './skeleton/ProductCardSkeleton'

const ProductsContainer = () => {
    const [products, setProducts] = useState([])
    return (
        <div className='flex-1'>
            <div className='w-3/5 mx-auto'>
                <div className='w-full mx-auto'>
                    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Search by products, owner, hostels..." />
                    </div>
                </div>
            </div>
            <div className='py-5 w-full flex flex-wrap gap-10 justify-between'>
                {[...Array(5)].map(() => <ProductCardSkeleton />)}
                {[...Array(40)].map(() => (<ProductCard />))}
            </div>

            <div className='flex justify-center'>
                <Typography as="h3" color="blue-gray" className="font-bold text-lg hover:underline cursor-pointer transition-all duration-200">
                    Show more
                </Typography>
                
            </div>
        </div>
    )
}

export default ProductsContainer