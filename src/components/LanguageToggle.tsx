import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="flex items-center space-x-2 text-navy-800 hover:text-navy-600"
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Globe className="h-5 w-5" />
      <span className="text-sm font-medium">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
}