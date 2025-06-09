import express from 'express';

const app = express();

app.get("/api/create", (req, res) => {
    res.send("Hello, this shortly. It is under development, we encarge you to visit as after few days.")
})

app.listen(3000, () =>{
    console.log("Server is running on port http://localhost:3000");
})