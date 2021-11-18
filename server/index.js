const express = require("express");

const path = require("path");

const app = express();

//ROLLBAR
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '2056681190f24d1daa13d84df11f573a',
  captureUncaught: true,
  captureUnhandledRejections: true,
})


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