const express = require("express");
const { createUser } = require("../controller/user.controller");

const userRouter = express.Router();

userRouter.post("/user", createUser);

module.exports = {
    userRouter
}