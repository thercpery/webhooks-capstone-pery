const express = require("express");
const app = express();
const PORT = process.port.ENV || 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/")

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));