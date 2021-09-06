import express from 'express';
import {getStudents,createStudent} from '../Controllers/Student.js';
import student from '../models/Student.js'

const router = express.Router();

router.get('/',getStudents);

router.post('/',createStudent);

// module.exports = router;
export default router;