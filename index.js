const express = require("express");
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello world"));


app.get("/result", (req, res) => {

});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));