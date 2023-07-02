import express from 'express'
import { facultyCheck } from '../middleware/facultyCheck.js'
import { acceptance, studentLeaves } from '../controller/FacultyController.js'
const app= express()
app.use(express.json())

const router = express.Router()
router.get("/data",studentLeaves)
router.post("/status",acceptance)
export default router;