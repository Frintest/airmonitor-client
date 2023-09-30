const express = require("express");
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
   host: "localhost",
   user: "sensor_user",
   password: "jshdf^%hfjDfsbh$",
   database: "sensor",
});

const app = express();

app.get("/", (req, res) => {
   pool.query("SELECT * FROM Sensor").then((data) => {
      res.json(data);
   });
});

app.listen(3001, () => {
   console.log("Server is running");
});

