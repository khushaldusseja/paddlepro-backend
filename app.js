const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const contactUsrouter = require("./routes/contactUs");
const app = express();

const url = "mongodb://localhost:27017";
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
app.use(bodyParser.json());
try {
  con.on("open", () => {
    console.log("connected");
  });
} catch (error) {
  console.log("Error: " + error);
}

const port = 9000;
app.use("/contactUs", contactUsrouter);
app.listen(port, () => {
  console.log("Server started");
});
