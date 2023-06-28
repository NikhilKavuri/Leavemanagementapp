import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/db.js"
import loginRoute from "./routes/loginRoute.js"
import leaveRoute from "./routes/studentleaveRoute.js"
import facultyRoute from "./routes/facultyRoute.js"
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

db.once("open",()=>{
    console.log('connected')
})

// initial routes
app.use("/login",loginRoute)
app.use("/student",leaveRoute)
app.use("/faculty",facultyRoute)
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Started on ${port}`);
});
