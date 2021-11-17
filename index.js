const express = require("express");

const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../home.html'));
})

const port = process.env.PORT || 4006

app.listen(port, () => {
    console.log(`The app is ready on port ${port}`);
});