const express = require("express");

const path = require("path");

const app = express();

//ROLLBAR
var _rollbarConfig = {
    accessToken: "aa3f7cbf940c4faeba1f278c91ca2f58",
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
        environment: "production"
    }
};


app.get("/", (req, res) => {
    rollbar.info('SUCKIT')
    res.sendFile(path.join(__dirname, '../home.html'));
})

const port = process.env.PORT || 4006

app.use('/server/index.js', express.static(path.join('__dirname, ../server/index.js')))

app.use('/img', express.static(path.join(__dirname, '../img')))

app.listen(port, () => {
    console.log(`The app is ready on port ${port}`);
});