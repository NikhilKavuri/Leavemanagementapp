import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import LoginModel from "../models/loginModel.js";
dotenv.config();
export const facultyCheck = async (req, res, next) => {
  try {
    const cookie = req.headers.cookie;
    const token = cookie.split("=")[1];
    const verifyToken = jwt.verify(token, process.env.SECRET);
    const getFacultyData = await LoginModel.find({ id: verifyToken.id });
    if (getFacultyData && getFacultyData[0].role == "faculty") {
      next();
    } else {
      res.send("Invalid Student");
    }
  } catch (err) {
    res.send(err);
  }
};
