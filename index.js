const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

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

app.get("/cources/details/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const singleCourse = cources.find(c => c.id === id)
    res.send(singleCourse)
})

app.get("/team", (req, res) => {
    res.send(team)
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})