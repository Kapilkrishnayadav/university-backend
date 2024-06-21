const mongoose = require("mongoose");
require("./connectDb/conn");

const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const http = require("http");

const server = http.createServer(app);

const route = require("./routes/route");
app.use(cookieParser());
app.use(express.json());

app.use("/api", route);

const port = process.env.PORT || 3001;
server.listen(port, (err) => {
  if (err) console.log(err);
  console.log("Server started at http://localhost:" + port);
});
