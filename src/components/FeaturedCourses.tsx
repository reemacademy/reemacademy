import React from 'react';
import { ArrowRight } from 'lucide-react';
import CourseCard from './CourseCard';
import type { Course } from '../types/course';

const courses: Course[] = [
  {
    id: 1,
    title: 'Strategic Leadership & Management',
    instructor: 'Dr. Sarah Chen',
    rating: 4.9,
    students: 2840,
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Digital Transformation Strategy',
    instructor: 'Prof. Michael Roberts',
    rating: 4.8,
    students: 1950,
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Financial Markets & Analysis',
    instructor: 'Emma Thompson, MBA',
    rating: 4.9,
    students: 3200,
    duration: '10 weeks',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80'
  }
];

export default function FeaturedCourses() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
            <p className="mt-2 text-lg text-gray-600">Discover our most popular business programs</p>
          </div>
          <button 
            className="flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
            aria-label="View all courses"
          >
            View All Courses
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}