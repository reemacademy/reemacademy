import express from 'express';
import { createCourse, getCourses, getCourseById } from '../controllers/courseController.js';
import { protect, instructor } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getCourses)
  .post(protect, instructor, createCourse);

router.route('/:id')
  .get(getCourseById);

export default router;