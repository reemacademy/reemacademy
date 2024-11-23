import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import type { Course } from '../types/course';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={course.image}
          alt={`${course.title} course thumbnail`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4">{course.instructor}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
            <span className="ml-1 text-gray-600">{course.rating}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-5 w-5 mr-1" aria-hidden="true" />
            <span>{course.students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-1" aria-hidden="true" />
            <span>{course.duration}</span>
          </div>
        </div>
        <button 
          className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          aria-label={`Enroll in ${course.title}`}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}