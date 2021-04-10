const express = require("express");
const app = express();
const path = require("path");
const {join} = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const api = require("./routes/api.js");

const port = process.env.PORT || 3000;

// Set view engine
app.set("view engine", "ejs");

// Load static file
app.use(express.static(path.join(__dirname, "public")));

// 3rd party middleware for logging
app.use(morgan("dev"));

// Load routes
app.use("/api", bodyParser.json(), api);
// app.use("/", bodyParser.json(), bodyParser.urlencoded({extended: true}), web);

// 404 handler middleware
app.use(function (req, res, next) {
	res.render(join(__dirname, "./views/404"));
});

// Listening
app.listen(port, () => {
	console.log("Server is running successfully");
});
