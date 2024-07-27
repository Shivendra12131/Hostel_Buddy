import React from 'react'
import Filter from '../components/Filter'
import ProductsContainer from '../components/ProductsContainer'

const Products = () => {
  return (
    <div className='w-full flex gap-x-16 px-5 py-8 bg-blue-gray-50'>
      <Filter />
      <ProductsContainer />
    </div>
  )
}

export default Products