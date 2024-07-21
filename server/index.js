import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import 'dotenv/config';

import connectToDB from './config/db.js';

// dotenv.config();

const app = express();

const PORT = process.env.PORT | 4000;


const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());





app.get("/", async(req, res) => {
    res.send("Hostel Buddy Web Application");
})


app.listen(PORT, () => {
    console.log(`Hostel Buddy server running on ${PORT}.`);
    console.log('Waiting for MongoDB to be connected....')
    connectToDB();
});