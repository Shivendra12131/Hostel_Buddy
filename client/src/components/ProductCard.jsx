import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
	Tooltip,
	IconButton,
	Chip,
} from "@material-tailwind/react";
import profileImg from '../assets/Arvind_2.jpg'

const ProductCard = ({ product }) => {
	return (
		<Card className="h-fit max-w-[15rem] shadow-xl">
			<CardHeader className="h-40" floated={false} shadow={false} >
				<img
					src={product?.images}
					alt="ui/ux review check"
					className="h-full object-cover mx-auto"
				/>
			</CardHeader>
			<CardBody>
				<div className="mb-1 flex items-center justify-between">
					<Typography variant="h5" color="blue-gray" className="font-medium">
						{product.title.length > 17 ? product?.title.slice(0,17)+"..." : product?.title}
					</Typography>
				</div>
				<Typography className="font-lighter text-sm text-blue-gray-300">
					{product?.description?.length > 20 ? product?.description?.substring(0,20).concat("...") : product?.description }
				</Typography>
				<div className="mt-4 h-14 flex items-center gap-3">
					<img src={product?.owner?.profileImage} alt="" className="rounded-full h-full" />
					<div className="h-full flex flex-col">
					<Typography variant="h6" color="blue-gray" className="font-bold">
						{product?.owner?.name}

					</Typography>
					<Typography variant="h6" color="blue-gray" className="font-medium">
						({product?.owner?.hostel?.name})
					</Typography>
					</div>
				</div>
			</CardBody>
			<CardFooter className="pt-3">
				<Button size="lg" fullWidth={true} className="bg-[#350145]">
					Reserve
				</Button>
			</CardFooter>
		</Card>
	)
}

export default ProductCard
