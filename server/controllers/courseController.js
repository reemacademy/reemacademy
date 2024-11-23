import Course from '../models/Course.js';

export const createCourse = async (req, res) => {
  try {
    const { title, description, price, duration, category, image } = req.body;

    const course = await Course.create({
      title,
      description,
      instructor: req.user._id,
      price,
      duration,
      category,
      image
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({})
      .populate('instructor', 'name email')
      .populate('reviews.user', 'name');
    res.json(courses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('instructor', 'name email')
      .populate('reviews.user', 'name');
    
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};