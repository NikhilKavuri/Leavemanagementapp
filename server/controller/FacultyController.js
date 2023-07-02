import Leave from "../models/studentModel.js";
export const studentLeaves = async (req, res) => {
  try {
    const leaveData = await Leave.find();
    res.json(leaveData);
  } catch (err) {
    res.send(err).statusCode(401);
  }
};
export const acceptance = async (req,res)=>{
  try {
    const { id, acceptance } = req.body
    console.log(id,acceptance)
    const student = await Leave.findOne({ _id: id });
    if (student) {
      const update = await Leave.updateOne({ _id: id }, { $set: { acceptance: acceptance } });
      await Leave.deleteOne({ _id: id });
      res.json(acceptance)
    }
  } catch (error) {
    console.error('Error updating document:', error);
  }
  
}