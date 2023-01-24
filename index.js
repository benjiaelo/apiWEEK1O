//import express, body-parser
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const accountRoutes = require("./routes/account");
const bankRoutes = require("./routes/bank");
const userRoutes = require("./routes/user");

//create express server instance
const server = express();

//middlewares
server.use(bodyParser.json());

//routes
server.use(accountRoutes);
server.use(bankRoutes);
server.use(userRoutes);

// connect to databse start server
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://benjiaelo:pCX5sZ0IFrd3qzXR@cluster0.46rgtnj.mongodb.net/bank?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    server.listen(3000, () => console.log("server is ready"));
  })
  .catch((err) => console.log(err));
