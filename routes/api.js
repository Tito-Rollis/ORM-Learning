const {Router} = require("express");
const api = Router();
const UserController = require("../controllers/api/userController.js");
const userController = new UserController();

// Read
api.get("/user", userController.getUser);
// Read (Detail)
api.get("/user/:index", userController.getDetailUser);
// Create
api.post("/user", userController.insertUser);
// Update
api.put("/user/:index", userController.updateUser);
// Delete
api.delete("/user/:index", userController.deleteUser);

module.exports = api;
