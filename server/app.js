import express from 'express';
import { nanoid } from 'nanoid';
const app = express();

app.get("/api/create", (req, res) => {
    res.send(nanoid(7))
})

app.listen(3000, () =>{
    console.log("Server is running on port http://localhost:3000");
})