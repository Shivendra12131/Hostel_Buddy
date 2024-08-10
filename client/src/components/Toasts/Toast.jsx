import React from 'react'
import errorIcon from '../../assets/error.png'
import successIcon from '../../assets/success.png'
import { Card, Dialog } from '@material-tailwind/react';
import { IoCloseOutline } from 'react-icons/io5';

const Toast = ({ type, message, open, handleOpen }) => {
	return (
		<Dialog
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

				<div className='flex justify-end flex-col gap-10 items-center px-11 mb-5'>
					<div className='flex flex-col mt-10 items-center gap-7 justify-center'>
						<img src={type == "error" ? errorIcon : successIcon} alt="" width={120} />
						<div className='text-center'>
							<h1 className=' font-bold text-xl text-blue-gray-900'>{message.title}</h1>
							<p>{message.description}</p>
						</div>
					</div>
				</div>
			</Card>
		</Dialog>
	)
}

export default Toast