import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Users, BookOpen, Target } from 'lucide-react';

export default function AboutUs() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Reem Academy",
      description: "At Reem Academy of Sciences, we deeply understand companies' growing need to develop and qualify their workforce. With continuous changes in the business environment, equipping employees with new and advanced skills becomes essential to maintain leadership and excellence. We strive to qualify our trainees by providing training courses and programs according to the best standards and highest quality, taking into account the diversity of fields we cover, such as:",
      fields: [
        "Administrative",
        "Leadership",
        "Technical",
        "Financial",
        "Digital Transformation",
        "Supply Chain",
        "Quality",
        "Specialization"
      ]
    },
    ar: {
      title: "عن أكاديمية ريم",
      description: "نحن أكاديمية ريم للعلوم، ندرك بعمق حاجة الشركات المتزايـــدة لتطوير وتأهيل كوادرها الوظيفية. مع التغيـــــرات المستمــرة في بيئـــة الأعمال يصبح تزويد الموظفين بالمهارات الجديدة والمتقدمة ضرورة لا غنى عنها للحفاظ على الريادة والتميـــز، حيث اننا نسعى الى تأهيل المتدربين لدينا من خلال تقديم الدورات والبرامج التدريبية وفق افضل المعايير وأعلى جودة، مع مراعاة تنوع المجالات التي نقوم بتغطيتها، مثل:",
      fields: [
        "الإداري",
        "القيادي",
        "التقني",
        "المالي",
        "التحول الرقمي",
        "سلاسل الإمداد",
        "الجودة",
        "التخصصية"
      ]
    }
  };

  const features = [
    { icon: <Award className="h-6 w-6" />, count: "35+", text: language === 'en' ? "Years Experience" : "سنوات الخبرة" },
    { icon: <Users className="h-6 w-6" />, count: "10K+", text: language === 'en' ? "Trained Professionals" : "متدرب محترف" },
    { icon: <BookOpen className="h-6 w-6" />, count: "20+", text: language === 'en' ? "Training Programs" : "برنامج تدريبي" },
    { icon: <Target className="h-6 w-6" />, count: "98%", text: language === 'en' ? "Success Rate" : "معدل النجاح" }
  ];

  return (
    <section className="py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-medium text-navy-800 mb-6">
              {content[language].title}
            </h2>
            <p className="text-lg text-navy-600 mb-8 leading-relaxed">
              {content[language].description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {content[language].fields.map((field, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 rtl:space-x-reverse text-navy-700"
                >
                  <span className="w-2 h-2 bg-navy-500 rounded-full"></span>
                  <span>{field}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center text-navy-600 mb-4">
                  {feature.icon}
                </div>
                <div className="text-3xl font-bold text-navy-800 mb-2">
                  {feature.count}
                </div>
                <div className="text-navy-600">
                  {feature.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}