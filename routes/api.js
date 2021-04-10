const {Router} = require("express");
const api = Router();

// Read
api.get("/user");
// Read (Detail)
api.get("/user/:index");
// Create
api.post("/user");
// Update
api.put("/user/:index");
// Delete
api.delete("/user/:index");
