import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/Header';
import { ProjectLinks } from './components/ProjectLinks';
import { CalendarWidget } from './components/CalendarWidget';
import { QuickLinks } from './components/QuickLinks';
import './styles.css';

export const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-100 to-base-200">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary to-secondary"></div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <Header currentTime={currentTime} />

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Left column */}
          <div className="space-y-6">
            <ProjectLinks />
            <QuickLinks />
          </div>

          {/* Right column */}
          <div>
            <CalendarWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
