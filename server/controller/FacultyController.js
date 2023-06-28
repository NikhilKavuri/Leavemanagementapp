import Leave from "../models/studentModel.js";
export const studentLeaves = async (req, res) => {
  try {
    const leaveData = await Leave.find();
    res.json(leaveData);
  } catch (err) {
    res.send(err).statusCode(401);
  }
};
