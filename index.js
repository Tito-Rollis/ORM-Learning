const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const port = process.env.PORT || 3000;

// Set view engine
app.set("view engine", "ejs");

// 3rd party middleware for logging
app.use(morgan("dev"));

// Load routes
app.use("/api", api);
app.use("/", bodyParser.json(), bodyParser.urlencoded({extended: true}), web);

// Listening
app.listen(port, () => {
	console.log("Server is running successfully");
});
