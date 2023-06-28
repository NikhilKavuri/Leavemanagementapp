import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import LoginModel from "../models/loginModel.js";
dotenv.config();
export const verifyStudent = async (req, res, next) => {
  try {
    const cookie = req.headers.cookie;
    const token = cookie.split("=")[1];
    const verifyToken = jwt.verify(token, process.env.SECRET);
    const getStudentData = await LoginModel.find({ id: verifyToken.id });
    if (getStudentData) {
      console.log("Success")
      next();
    } else {
      res.json("Invalid Student");
    }
  } catch (err) {
    res.json(err);
  }
};
