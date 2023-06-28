import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    requried: true,
  },
  id: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    requried: true,
  },
});

const LoginModel = mongoose.model("LoginModel",LoginSchema)
export default LoginModel;