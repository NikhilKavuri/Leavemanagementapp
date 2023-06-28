import express from 'express'
import { facultyCheck } from '../middleware/facultyCheck.js'
import { studentLeaves } from '../controller/FacultyController.js'
const app= express()
app.use(express.json())

const router = express.Router()
router.get("/data",facultyCheck,studentLeaves)
export default router;