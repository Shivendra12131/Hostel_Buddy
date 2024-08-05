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
                </div>
            </div>
            <div className='py-5 w-full flex flex-wrap gap-10 justify-between'>
                {[...Array(40)].map(() => (<ProductCard />))}
                {[...Array(5)].map(() => <ProductCardSkeleton />)}
                
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