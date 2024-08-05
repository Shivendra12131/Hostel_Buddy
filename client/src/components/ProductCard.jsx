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
import profileImg from '../assets/profile.jpg'

const ProductCard = () => {
	return (
		<Card className="h-fit max-w-[15rem] shadow-xl">
			<CardHeader className="h-40" floated={false} shadow={false} >
				<img
					src="https://m.media-amazon.com/images/I/71AuTPJ0veL._AC_UF1000,1000_QL80_.jpg"
					alt="ui/ux review check"
					className="h-full object-cover mx-auto"
				/>
				<IconButton
					size="sm"
					color="red"
					variant="text"
					className="!absolute top-0 right-0 rounded-full"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-6 w-6"
					>
						<path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
					</svg>
				</IconButton>
			</CardHeader>
			<CardBody>
				<div className="mb-1 flex items-center justify-between">
					<Typography variant="h5" color="blue-gray" className="font-medium">
					Lay's Sizzlin’ Hot Potato Chips
					</Typography>
				</div>
				<Typography className="font-lighter text-sm text-blue-gray-300">
					Enter a freshly updated and thoughtfully furnished ...
				</Typography>
				<div className="mt-4 h-14 flex items-center gap-3">
					<img src={profileImg} alt="" className="rounded-full h-full" />
					<div className="h-full flex flex-col">
					<Typography variant="h6" color="blue-gray" className="font-bold">
						Shivendra 
					</Typography>
					<Typography variant="h6" color="blue-gray" className="font-medium">
						(Manimala)
					</Typography>
					</div>
				</div>
			</CardBody>
			<CardFooter className="pt-3">
				<Button size="lg" fullWidth={true}>
					Reserve
				</Button>
			</CardFooter>
		</Card>
	)
}

export default ProductCard
