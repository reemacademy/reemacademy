import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    'hero.title': 'Excellence in Every Detail',
    'hero.subtitle': 'Crafting exceptional experiences with precision and sophistication.',
    'hero.exploreWork': 'Explore Our Work',
    'hero.contactUs': 'Contact Us',
    'terminology.title': 'Business Terminology',
    'terminology.subtitle': 'Essential terms and definitions for business professionals',
    'courses.title': 'Specialized Business Programs',
    'courses.subtitle': 'Elevate your expertise with our comprehensive professional development courses',
    'courses.enrollNow': 'Enroll Now',
    'about.title': 'About Reem Academy',
    'about.subtitle': 'Empowering professionals through excellence in education'
  },
  ar: {
    'nav.services': 'الخدمات',
    'nav.portfolio': 'معرض الأعمال',
    'nav.about': 'عن الشركة',
    'nav.contact': 'اتصل بنا',
    'nav.getStarted': 'ابدأ الآن',
    'hero.title': 'التميز في كل التفاصيل',
    'hero.subtitle': 'نصنع تجارب استثنائية بدقة وتطور',
    'hero.exploreWork': 'استكشف أعمالنا',
    'hero.contactUs': 'اتصل بنا',
    'terminology.title': 'مصطلحات الأعمال',
    'terminology.subtitle': 'المصطلحات والتعريفات الأساسية للمهنيين في مجال الأعمال',
    'courses.title': 'برامج الأعمال المتخصصة',
    'courses.subtitle': 'ارتقِ بخبراتك مع دوراتنا الشاملة للتطوير المهني',
    'courses.enrollNow': 'سجل الآن',
    'about.title': 'عن أكاديمية ريم',
    'about.subtitle': 'تمكين المحترفين من خلال التميز في التعليم'
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}