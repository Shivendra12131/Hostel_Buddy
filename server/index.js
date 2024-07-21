import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import 'dotenv/config'
import connectToDB from './config/db.js';
import multer from 'multer'
import { uploadImage } from './utility/images.js';


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



app.listen(PORT, () => {
    console.log(`Hostel Buddy server running on ${PORT}.`);
    console.log('Waiting for MongoDB to be connected....')
    connectToDB();
});