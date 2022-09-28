const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config({path:"config/dotenv.env"})

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(console.log("Database connected!"))
    .catch((e) => {
      console.log(e);
    });
};
module.exports = connectDB;
