// import the express
import express from 'express';

// import the controller
import {  logoutFunc, studentLogin } from '../controller/LoginController.js';
// for getting body data
const app = express()
app.use(express.json())

// create the router from express
const router = express.Router();

// Write the routes required
router.post("/user", studentLogin)
router.post("/logout",logoutFunc)

export default router