import mongoose from "mongoose";

const StudentLeave = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  acceptance: {
    type: String,
    requried: true,
  },
});
const Leave = new mongoose.model("Leave", StudentLeave);
export default Leave;
