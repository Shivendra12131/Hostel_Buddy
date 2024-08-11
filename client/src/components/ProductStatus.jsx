import { Button, Chip } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import { HiOutlineArrowLongDown } from 'react-icons/hi2';
import { IoMdCheckmark } from 'react-icons/io';
import OtpInput from "react-otp-input";


const ProductStatus = () => {
    const [steps, setSteps] = useState(6);
    const [pickupOTP, setPickOTP] = useState("");
    const [returnOTP, setReturnOTP] = useState("");


    return (
        <div className='w-full cursor-default px-10 py-8 h-full flex flex-col gap-3'>
            <div className='flex gap-5'>
                <div class={`w-5 h-5 flex items-center justify-center text-lg font-extralight  ${steps >= 0 ? 'bg-[#84cc99]' : 'border-[1px] border-gray-700'} rounded-full`}>
                    <IoMdCheckmark color='white' size={15} />
                </div>
                <div className='flex flex-col justify-start -mt-2'>
                    <h1 className='font-bold'>Service Requested</h1>
                    <p className='text-sm' style={{visibility: `${steps >= 0 ? 'visible' : 'hidden'}`}}>3:45 pm | 20 June 2020</p>
                </div>
            </div>

            <HiOutlineArrowLongDown size={30} className='text-gray-500 -ml-1 scale-y-150' />

            <div className='flex gap-5'>
                <div class={`w-5 h-5 flex items-center justify-center text-lg font-extralight  ${steps >= 1 ? 'bg-[#84cc99]' : 'border-[1px] border-gray-700'} rounded-full`}>
                    <IoMdCheckmark color='white' size={15} />
                </div>
                <div className='flex flex-col justify-start -mt-2'>
                    <h1 className='font-bold'>Accepted</h1>
                    <p className='text-sm' style={{visibility: `${steps >= 1 ? 'visible' : 'hidden'}`}}>4:45 pm | 20 June 2020</p>
                </div>
            </div>

            <HiOutlineArrowLongDown size={30} className='text-gray-500 -ml-1 scale-y-150' />

            <div className='flex gap-5'>
                <div class={`w-5 h-5 flex items-center justify-center text-lg font-extralight  ${steps >= 2 ? 'bg-[#84cc99]' : 'border-[1px] border-gray-700'} rounded-full`}>
                    <IoMdCheckmark color='white' size={15} />
                </div>
                <div className='flex flex-col justify-start -mt-2'>
                    <h1 className='font-bold'>Waiting for pick up</h1>
                    <p className='text-sm' style={{visibility: `${steps >= 2 ? 'visible' : 'hidden'}`}}>Yet to delivered</p>
                </div>
                <div className={`-mt-5 ${steps == 2 ? 'block' : 'hidden'} ml-auto`}>
                    <OtpInput
                        value={pickupOTP}
                        onChange={setPickOTP}
                        numInputs={4}
                        renderInput={(props) => <input {...props} />}
                        shouldAutoFocus
                        inputStyle={{
                            minWidth: "32px",
                            height: "32px",
                            margin: "5px",
                            fontSize: "14px",
                            fontWeight: "600",
                            padding: "5px 10px",
                            textAlign: "center",
                            backgroundColor: "#f6f8f9",
                            border: "0.5px solid #a3adbb",
                            borderRadius: "4px",
                        }}
                    />
                    <Button color='green' className='px-6 mt-2 py-1 float-end font-normal text-md capitalize'>Verify</Button>
                </div>
            </div>

            <HiOutlineArrowLongDown size={30} className={`text-gray-500 -ml-1 ${steps == 2 && '-mt-6'} scale-y-150`} />

            <div className='flex gap-5'>
                <div class={`w-5 h-5 flex items-center justify-center text-lg font-extralight ${steps >= 3 ? 'bg-[#84cc99]' : 'border-[1px] border-gray-700'} rounded-full`}>
                    <IoMdCheckmark color='white' size={15} />
                </div>
                <div className='flex flex-col justify-start -mt-2'>
                    <h1 className='font-bold'>Product Picked up</h1>
                    <p className='text-sm' style={{visibility: `${steps >= 3 ? 'visible' : 'hidden'}`}}>3:45 pm | 20 June 2020</p>
                </div>
            </div>

            <HiOutlineArrowLongDown size={30} className='text-gray-500 -ml-1 scale-y-150' />

            <div className='flex gap-5'>
                <div class={`w-5 h-5 flex items-center justify-center text-lg font-extralight ${steps >= 4 ? 'bg-[#84cc99]' : 'border-[1px] border-gray-700'} rounded-full`}>
                    <IoMdCheckmark color='white' size={15} />
                </div>
                <div className='flex flex-col justify-start -mt-2'>
                    <h1 className='font-bold'>Work in progress</h1>
                    <p className='text-sm' style={{visibility: `${steps >= 4 ? 'visible' : 'hidden'}`}}>3:45 pm | 20 June 2020</p>
                </div>
                <div className={`ml-auto ${steps == 4 ? 'block' : 'hidden'}`}>
                    <Button color='green' className='px-6 py-1 float-end font-normal text-md capitalize'>Return</Button>
                </div>
            </div>


            <HiOutlineArrowLongDown size={30} className='text-gray-500 -ml-1 scale-y-150' />


            <div className='flex gap-5'>
                <div class={`w-5 h-5 flex items-center justify-center text-lg font-extralight  ${steps >= 5 ? 'bg-[#84cc99]' : 'border-[1px] border-gray-700'} rounded-full`}>
                    <IoMdCheckmark color='white' size={15} />
                </div>
                <div className='flex flex-col justify-start -mt-2'>
                    <h1 className='font-bold'>Return Requested</h1>
                    <p className='text-sm' style={{visibility: `${steps >= 5 ? 'visible' : 'hidden'}`}}>Yet to delivered</p>
                </div>
                <div className={`-mt-5 ${steps == 5 ? 'block' : 'hidden'} ml-auto`}>
                    <OtpInput
                        value={returnOTP}
                        onChange={setReturnOTP}
                        numInputs={4}
                        renderInput={(props) => <input {...props} />}
                        shouldAutoFocus
                        inputStyle={{
                            minWidth: "32px",
                            height: "32px",
                            margin: "5px",
                            fontSize: "14px",
                            fontWeight: "600",
                            padding: "5px 10px",
                            textAlign: "center",
                            backgroundColor: "#f6f8f9",
                            border: "0.5px solid #a3adbb",
                            borderRadius: "4px",
                        }}
                    />
                    <Button color='green' className='px-6 mt-2 py-1 float-end font-normal text-md capitalize'>Complete Return</Button>
                </div>
                <div className='ml-auto'>
                    <Chip className={` ${steps > 5 ? 'block' : 'hidden'} h-auto font-medium text-sm capitalize`} color='green' value='Returned' />
                </div>
            </div>


            <HiOutlineArrowLongDown size={30} className={`text-gray-500 -ml-1 ${steps == 5 && '-mt-6'} scale-y-150`} />
            





            <div className='flex gap-5'>
                <div class={`w-5 h-5 flex items-center justify-center text-lg font-extralight ${steps >= 6 ? 'bg-[#84cc99]' : 'border-[1px] border-gray-700'} rounded-full`}>
                    <IoMdCheckmark color='white' size={15} />
                </div>
                <div className='flex flex-col justify-start -mt-2'>
                    <h1 className='font-bold'>Device Returned</h1>
                    <p className='text-sm' style={{visibility: `${steps >= 6 ? 'visible' : 'hidden'}`}}>3:45 pm | 20 June 2020</p>
                </div>
            </div>

            <HiOutlineArrowLongDown size={30} className='text-gray-500 -ml-1 scale-y-150' />
            

            <div className='flex gap-5'>
                <div class={`w-5 h-5 flex items-center justify-center text-lg font-extralight ${steps >= 7 ? 'bg-[#84cc99]' : 'border-[1px] border-gray-700'} rounded-full`}>
                    <IoMdCheckmark color='white' size={15} />
                </div>
                <div className='flex flex-col justify-start -mt-2'>
                    <h1 className='font-bold'>Device Return Successful</h1>    
                    <p className='text-sm' style={{visibility: `${steps >= 7 ? 'visible' : 'hidden'}`}}>3:45 pm | 20 June 2020</p>
                </div>
            </div>

            <HiOutlineArrowLongDown size={30} className='text-gray-500 -ml-1 scale-y-150' />


            <div className='flex gap-5'>
                <div class={`w-5 h-5 flex items-center justify-center text-lg font-extralight ${steps >= 8 ? 'bg-[#84cc99]' : 'border-[1px] border-gray-700'} rounded-full`}>
                    <IoMdCheckmark color='white' size={15} />
                </div>
                <div className='flex flex-col justify-start -mt-2'>
                    <h1 className='font-bold'>Closed</h1>
                    <p className='text-sm' style={{visibility: `${steps >= 8 ? 'visible' : 'hidden'}`}}>3:45 pm | 20 June 2020</p>
                </div>
            </div>
        </div>
    )
}

export default ProductStatus