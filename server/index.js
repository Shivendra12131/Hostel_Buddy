import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import 'dotenv/config'
import connectToDB from './config/db.js';
import multer from 'multer'
import categoryRoutes from './routes/categories.js'; 

import productRoutes from './routes/product.js'
import imageRoutes from './routes/images.js'
import userRoutes from './routes/user.js'
import hostelRoutes from './routes/hostels.js'
import orderRoutes from './routes/order.js'


const app = express();

const PORT = process.env.PORT | 4000;


const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());



const storage = multer.memoryStorage()
const upload = multer({storage: storage})


// Register category routes
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/images/', imageRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/hostels', hostelRoutes);
app.use('/api/v1/orders', orderRoutes);


app.listen(PORT, () => {
    console.log(`Hostel Buddy server running on ${PORT}.`);
    console.log('Waiting for MongoDB to be connected....')
    connectToDB();
});