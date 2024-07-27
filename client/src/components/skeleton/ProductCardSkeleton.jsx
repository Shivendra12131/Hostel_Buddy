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


const ProductCardSkeleton = () => {
	return (
		<Card className="h-fit max-w-[15rem] shadow-xl">
			<CardHeader className="h-40" floated={false} shadow={false} >
				<Typography as="div" color="blue-gray" className="mb-2 h-full w-full rounded-md bg-gray-300 skeleton">
					&nbsp;
				</Typography>
			</CardHeader>
			<CardBody >
				<div className="mb-3 flex items-center justify-between">
					<Typography as="div" color="blue-gray" className="mb-2 h-4 w-full rounded-full bg-gray-300 skeleton">
						&nbsp;
					</Typography>
				</div>
				<Typography as="div" color="blue-gray" className="mb-2 h-2 w-full rounded-full bg-gray-300 skeleton">
					&nbsp;
				</Typography>
				<Typography as="div" color="blue-gray" className="mb-2 h-2 w-4/5 rounded-full bg-gray-300 skeleton">
					&nbsp;
				</Typography>
				<div className="mt-4 h-14 flex items-center gap-3">
					<div className="rounded-full h-14 w-14 bg-gray-300 skeleton"></div>
					<div className="h-full items-center justify-center gap-3 flex flex-col">
						<Typography as="div" color="blue-gray" className="h-3 w-28 rounded-full bg-gray-300 skeleton">
							&nbsp;
						</Typography>
						<Typography as="div" color="blue-gray" className="h-3 w-28 rounded-full bg-gray-300 skeleton">
							&nbsp;
						</Typography>
					</div>
				</div>
			</CardBody>
			<CardFooter >
				<Typography as="div" color="blue-gray" className="h-12 w-full rounded-md bg-gray-300 skeleton">
					&nbsp;
				</Typography>
			</CardFooter>
		</Card>
	)
}

export default ProductCardSkeleton