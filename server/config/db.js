import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MongoConnection = process.env.MONGODB;
mongoose
  .connect(MongoConnection)
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => {
    console.log(err);
  });

export default mongoose.connection;
