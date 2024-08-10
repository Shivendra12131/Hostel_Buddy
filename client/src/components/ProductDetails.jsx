import {
    Button, Card, Carousel, Dialog,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from '@material-tailwind/react'
import { MdCurrencyRupee, MdWallet } from 'react-icons/md';
import ProductRequestForm from '../components/ProductRequestForm';
import ProductStatus from '../components/ProductStatus';
import React, { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import { getDataFromApi } from '../utility/api';


const ProductDetails = () => {
    const [requested, setRequested] = useState(true);
    const { id } = useParams();


    const [productData, setProductData] = useState()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);


    useEffect(() => {
        getDataFromApi('/products/desc', { productId: id })
            .then(data => {
                console.log(data.productData)
                setProductData(data.productData);
            })
    }, [])


    return (
        <div className='px-28 py-5 bg-bgGray1'>
            {/* <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
                animate={{
                    mount: { scale: 1, y: 0, x: 0 },
                    unmount: { scale: 0.9, y: -100 },
                  }}
            >
                <Card className="mx-auto w-full px-5 py-4 max-w-[24rem]">
                    <button
                        className='float-right absolute right-5 top-5 bg-[#f6f8f9] p-1 rounded-lg'
                        onClick={handleOpen}
                    >
                        <IoCloseOutline size={30} />
                    </button>

                    <div className='flex justify-end flex-col gap-10 items-center'>
                        <div className='flex flex-col mt-10 items-center gap-7 justify-center'>
                            <img src={deleteIcon} alt="" width={120} />
                            <p>Are you sure want to delete this product ?</p>
                        </div>
                        <div className='flex gap-10'>
                            <Button variant='outlined' color='green'>Delete</Button>
                            <Button color='green' onClick={handleOpen}>Don't Delete</Button>
                        </div>
                    </div>
                </Card>
            </Dialog> */}


            <Card className='w-full p-10'>

                {/* <Button onClick={() => handleOpen(true)}>Open</Button> */}
                <div className='flex w-full'>
                    <div className='w-1/2 px-10'>
                        <div className='flex justify-center'>
                            <img
                                src={productData?.images}
                                alt="image 1"
                                className="h-64 rounded-xl object-cover"
                            />
                        </div>
                        <h1 className='text-3xl font-bold mt-4 mb-3'>{productData?.title}</h1>
                        <p className='text-lg'>{productData?.description}</p>


                        <div className='flex mt-10 gap-3'>
                            <div className='rounded-full overflow-hidden'>
                                <img src={productData?.owner.profileImage} alt="" className='rounded-full w-12' />
                            </div>
                            <div className='flex flex-col justify-center w-auto'>
                                <h2>{productData?.owner.name}</h2>
                            </div>
                            <div className='flex gap-3 items-center ml-auto'>
                                {/* <img src={callIcon} alt="" />
                                <img src={msgIcon} alt="" /> */}
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h3 className='font-bold text-lg mb-4 just'>Description</h3>
                            <h5>
                                <span className='font-bold'>Phone:</span> {productData?.owner.phone}
                            </h5>
                            <h5>
                                <span className='font-bold'>Hostel:</span> {productData?.owner.hostel.name}
                                ({productData?.owner.hostel.isInsideCampus ? "Inside Campus" : "Outside Campus"})
                            </h5>
                            <h5>
                                <span className='font-bold'>Phone:</span> {productData?.owner.phone}
                            </h5>
                            <h5>
                                <span className='font-bold'>Phone:</span> {productData?.owner.phone}
                            </h5>
                        </div>
                    </div>
                    <div className='w-1/2 border overflow-hidden border-[#e9ebed] rounded-xl'>
                        {requested ? <ProductStatus /> : <ProductRequestForm />}
                    </div>
                </div>
                <div className={`flex mt-20 justify-end gap-5 items-center ${requested && 'hidden'}`}>
                    {/* <div className='mr-auto'>
                        <div className='flex items-center'>
                            <MdCurrencyRupee size={25} />
                            <h1 className='font-bold text-3xl'>50</h1>
                        </div>
                        <p className='text-lg text-center'>Per day</p>
                    </div> */}
                    <Button variant='outlined' color='green' className='capitalize w-28 text-sm py-2'>Cancel</Button>
                    <Button color='green' className='capitalize w-28 text-sm py-2'>Request</Button>
                </div>
            </Card>
        </div>
    )
}

export default ProductDetails