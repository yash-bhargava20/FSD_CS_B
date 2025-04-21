const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnect = require("./Config/db.js");
dotenv.config();
const port = process.env.PORT || 3000;
dbConnect();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
