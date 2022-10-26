const express = require("express");
const app = express();
const cors = require("cors");
PORT = 5000;

app.use(cors())

const category = require("./data/category.json");
const cources = require("./data/cources.json");
const team = require("./data/mentor.json");

app.get("/", (req, res) => {
    res.send("server is running")
})

app.get("/category", (req, res) => {
    res.send(category)
})

app.get("/cources", (req, res) => {
    res.send(cources)
})
app.get("/team", (req, res) => {
    res.send(team)
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})