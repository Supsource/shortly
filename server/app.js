import { json } from 'express';
import express from 'express';
import { nanoid } from 'nanoid';
import dotenv from "dotenv";
import connectDB from './src/config/mongo.config.js';
dotenv.config("./.env")
import urlSchema from "./src/models/shorturl.model.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/api/create", (req, res) => {
    const {url} = req.body;
    const shortUrl = nanoid(7)
    const newUrl = new urlSchema({
        full_url: url,
        short_url: shortUrl
    })
    newUrl.save() //this will save the short url of the Real url (in memory)
    res.send(nanoid(7))
})

app.listen(3000, () =>{
    connectDB();
    console.log("Server is running on port http://localhost:3000");
})