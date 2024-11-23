import React from 'react';
import { Briefcase, GitBranch, ShieldCheck, Clock, Users, BarChart } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  students: number;
  level: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Strategic Business Management",
    description: "Master core business strategies, organizational leadership, and decision-making frameworks for enterprise success.",
    icon: <Briefcase className="h-6 w-6" />,
    duration: "12 weeks",
    students: 1240,
    level: "Advanced"
  },
  {
    id: 2,
    title: "Professional Project Management",
    description: "Learn industry-standard methodologies, agile practices, and project leadership techniques.",
    icon: <GitBranch className="h-6 w-6" />,
    duration: "10 weeks",
    students: 890,
    level: "Intermediate"
  },
  {
    id: 3,
    title: "Enterprise Risk Management",
    description: "Develop comprehensive risk assessment strategies and mitigation frameworks for modern businesses.",
    icon: <ShieldCheck className="h-6 w-6" />,
    duration: "8 weeks",
    students: 650,
    level: "Advanced"
  }
];

export default function SpecializedCourses() {
  return (
    <section className="py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-medium text-navy-800 mb-4">
            Specialized Business Programs
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Elevate your expertise with our comprehensive professional development courses
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center text-navy-800 mb-6">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-serif text-navy-800 mb-3">
                  {course.title}
                </h3>
                <p className="text-navy-600 mb-6">
                  {course.description}
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-navy-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center text-navy-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">{course.students}</span>
                  </div>
                  <div className="flex items-center text-navy-600">
                    <BarChart className="h-4 w-4 mr-2" />
                    <span className="text-sm">{course.level}</span>
                  </div>
                </div>
                <button className="w-full btn btn-primary">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}