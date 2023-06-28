import Leave from "../models/studentModel.js";

export const studentLeave = async (req, res) => {
  const { title,reason,id,approval } = req.body;
  const newObj = {
    studentId: id,
    title: title,
    reason: reason,
    acceptance: approval,
  };
  console.log(approval)
  const newLeave = new Leave(newObj);
  await newLeave.save();
  res.json({"Status":newObj.acceptance})
};
