// import the model from models
import LoginModel from "../models/loginModel.js";
import jwt from "jsonwebtoken";
// create a function and export it
export const studentLogin = async (req, res) => {
    const { id, role } = req.body;
    console.log(id)
    const studentData = await LoginModel.find({ role: role, id: id });
    const token = jwt.sign({ id: id }, process.env.SECRET);
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    console.log(studentData)
    res.cookie('token',token)
    res.json({token,studentData})
  };
  

export const logoutFunc = (req, res) => {
    res.clearCookie('token');
    res.sendStatus(200);
  };
  