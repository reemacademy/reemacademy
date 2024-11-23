import React from 'react';
import { Book } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Term {
  id: number;
  category: string;
  terms: {
    en: string;
    ar: string;
    definition: {
      en: string;
      ar: string;
    };
  }[];
}

const businessTerms: Term[] = [
  {
    id: 1,
    category: "Strategic Management",
    terms: [
      {
        en: "Strategic Planning",
        ar: "التخطيط الاستراتيجي",
        definition: {
          en: "The process of defining strategy and making decisions on allocating resources.",
          ar: "عملية تحديد الاستراتيجية واتخاذ القرارات بشأن تخصيص الموارد."
        }
      },
      {
        en: "Risk Assessment",
        ar: "تقييم المخاطر",
        definition: {
          en: "Systematic process of evaluating potential risks in business operations.",
          ar: "عملية منهجية لتقييم المخاطر المحتملة في العمليات التجارية."
        }
      }
    ]
  },
  {
    id: 2,
    category: "Project Management",
    terms: [
      {
        en: "Agile Methodology",
        ar: "المنهجية المرنة",
        definition: {
          en: "An iterative approach to project management and software development.",
          ar: "نهج تكراري لإدارة المشاريع وتطوير البرمجيات."
        }
      },
      {
        en: "Milestone Planning",
        ar: "تخطيط المراحل الرئيسية",
        definition: {
          en: "Setting and tracking key project objectives and deliverables.",
          ar: "تحديد وتتبع أهداف ومخرجات المشروع الرئيسية."
        }
      }
    ]
  }
];

export default function TerminologyDisplay() {
  const { language, t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-medium text-navy-800 mb-4">
            {t('terminology.title')}
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            {t('terminology.subtitle')}
          </p>
        </div>

        <div className="grid gap-8">
          {businessTerms.map((category) => (
            <div key={category.id} className="bg-navy-50 rounded-lg p-8">
              <h3 className="text-2xl font-serif text-navy-800 mb-6 flex items-center">
                <Book className="h-6 w-6 mr-3" />
                {category.category}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.terms.map((term, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex flex-col space-y-2 mb-4">
                      <h4 className="text-xl font-medium text-navy-800">
                        {language === 'en' ? term.en : term.ar}
                      </h4>
                      <span className="text-sm text-navy-500">
                        {language === 'en' ? term.ar : term.en}
                      </span>
                    </div>
                    <p className="text-navy-600 text-sm">
                      {language === 'en' ? term.definition.en : term.definition.ar}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}