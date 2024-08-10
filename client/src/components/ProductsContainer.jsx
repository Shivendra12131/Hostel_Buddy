import { Input, Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import ProductCardSkeleton from './skeleton/ProductCardSkeleton'
import { getDataFromApi } from '../utility/api'


const ProductsContainer = ({setSelectedCategories,selectedCategories,search}) => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const handlePreviousPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNextPage = () => {
        if (page < totalPages) setPage(page + 1);
    };

    useEffect(() => {
        setLoading(true);
        getDataFromApi("/products/all", { page ,selectedCategories ,search})
            .then((data) => {

                console.log(data?.products);
                setProducts(data.products);
                setLoading(false);
                setTotalPages(data.totalPages);
            })
    }, [page,selectedCategories,search]);


    return (
        <div className='flex-1'>
            <div className='w-3/5 mx-auto'>
                <div className='w-full mx-auto'>
                </div>
            </div>
            <div className='py-5 w-full flex flex-wrap gap-14 '>
                {products?.map((product) => (<ProductCard key={product.id} product={product} />))}
                {loading && ([...Array(8)].map(() => <ProductCardSkeleton />))}
            </div>

            {page!== totalPages && <div className='flex justify-center'>
                <Typography onClick={handleNextPage} as="h3" color="blue-gray" className="font-bold text-lg hover:underline cursor-pointer transition-all duration-200">
                    Show more
                </Typography>
                
            </div>}
        </div>
    )
}

export default ProductsContainer