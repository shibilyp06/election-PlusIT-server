const express = require("express");
const app = express();
require("dotenv").config();
const port = 5000;
const cors = require("cors");
const mongoose = require("./config/config");
const userRouter = require("./routers/userRouter");

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log("server connected");
});
