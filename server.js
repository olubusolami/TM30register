const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database");
const registerRoute = require("./registerRoute");

(async function db() {
    connection();
  })();
  
  app.use(cors());
  
  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });
  
  //middleware
  app.use(express.json());
  
  //Routes
  app.use("/", registerRoute);

  port = process.env.PORT || 5000;
app.listen(port, () => console.log("listening carefully"));