const {Router} = require("express");
const web = Router();
const {join} = require("path");
const LoginController = require("../controllers/web/loginController.js");
const DashboardController = require("../controllers/web/dashboardController.js");
const loginController = new LoginController();
const dashboardController = new DashboardController();
const {user_game} = require("../models");
const cookieParser = require("cookie-parser");

// Middlewares
web.use(cookieParser());

// Login Page
web.get("/login", loginController.login);
web.post("/login", loginController.doLogin);
web.get("/logout", loginController.logout);

// Dashboard Page
web.get("/", dashboardController.index);
// Edit Page
web.get("/add", dashboardController.add);
// Post User
web.post("/add", dashboardController.postUser);
// Edit Page
web.get("/edit/:id", dashboardController.edit);
// Edit User
web.post("/edit/:id", dashboardController.editUser);
// Delete User
web.get("/delete/:id", dashboardController.deleteUser);

module.exports = web;
