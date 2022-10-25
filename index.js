const express = require("express");
const app = express();
const cors = require("cors");
PORT = 5000;

app.use(cors())

const category = require("./data/category.json");

app.get("/", (req, res) => {
    res.send("server is running")
})

app.get("/category", (req, res) => {
    res.send(category)
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})