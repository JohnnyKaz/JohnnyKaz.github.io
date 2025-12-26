import { useState, useEffect } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';
import { AboutMe } from './components/AboutMe';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Language } from './utils/translations';

export default function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    setTheme(savedTheme);
    
    // Apply dark mode class
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Check for saved language preference or default to 'en'
    const savedLanguage = (localStorage.getItem('language') as Language) || 'en';
    setLanguage(savedLanguage);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Properly toggle dark class
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'el' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <AboutMe language={language} />;
      case 'Resume':
        return <Resume language={language} />;
      case 'Portfolio':
        return <Portfolio language={language} />;
      case 'Contact':
        return <Contact language={language} />;
      default:
        return <AboutMe language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <AnimatedBackground theme={theme} />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          <Sidebar language={language} />
          <main className="flex-1 min-w-0 w-full">
            <Navigation 
              currentPage={currentPage} 
              onPageChange={setCurrentPage}
              language={language}
              theme={theme}
              onToggleTheme={toggleTheme}
              onToggleLanguage={toggleLanguage}
            />
            {renderPage()}
          </main>
        </div>
      </div>
    </div>
  );
}
