import express from 'express';
import { studentLeave } from '../controller/Leavecontroller.js';
import { verifyStudent } from '../middleware/studentLeave.js';
const app = express()
app.use(express.json())

const router =  express.Router()
// ,verifyStudent
router.post("/leave",studentLeave)
export default router