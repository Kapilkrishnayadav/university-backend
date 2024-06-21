const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://Vicky:Vicky@cluster0.a8d8bws.mongodb.net/university"
  )
  .then(() => {
    console.log("running succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
const Schema = mongoose.Schema;

