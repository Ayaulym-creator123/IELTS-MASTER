/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { PublicPage, UserProgress } from './types/ielts';
import { getStoredProgress, clearLocalProgress, saveProgress } from './services/storageService';

// Layout Components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Public Views
import { HomeLanding } from './components/public/HomeLanding';
import { AboutView } from './components/public/AboutView';
import { FeaturesView } from './components/public/FeaturesView';
import { PreparationGuide } from './components/public/PreparationGuide';
import { ContactView } from './components/public/ContactView';

// Core Learning Modules & Dashboards
import { DashboardView } from './components/dashboard/DashboardView';
import { ReadingView } from './components/reading/ReadingView';
import { ListeningView } from './components/listening/ListeningView';
import { WritingView } from './components/writing/WritingView';
import { SpeakingView } from './components/speaking/SpeakingView';
import { GrammarView } from './components/grammar/GrammarView';
import { VocabularyView } from './components/vocabulary/VocabularyView';
import { MockExamsView } from './components/mock/MockExamsView';
import { ProgressView } from './components/progress/ProgressView';
import { StudyHistoryView } from './components/progress/StudyHistoryView';

export default function App() {
  // Sync page from URL hash if valid, otherwise default to home
  const getInitialPage = (): PublicPage => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashPage = window.location.hash.replace('#', '') as PublicPage;
      const validPages: PublicPage[] = [
        'home', 'about', 'preparation', 'features', 'contact',
        'dashboard', 'reading', 'listening', 'writing', 'speaking',
        'grammar', 'vocabulary', 'mock-exams', 'results', 'progress', 'history'
      ];
      if (validPages.includes(hashPage)) {
        return hashPage;
      }
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PublicPage>(getInitialPage);
  const [progress, setProgress] = useState<UserProgress>(getStoredProgress);

  // Sync state when local storage updates
  const refreshProgress = useCallback(() => {
    setProgress(getStoredProgress());
  }, []);

  useEffect(() => {
    const handleProgressChange = () => {
      refreshProgress();
    };

    window.addEventListener('ielts_progress_updated', handleProgressChange);
    window.addEventListener('storage', handleProgressChange);

    // Sync on browser back/forward buttons
    const handleHashChange = () => {
      const hashPage = window.location.hash.replace('#', '') as PublicPage;
      if (hashPage && hashPage !== currentPage) {
        setCurrentPage(hashPage);
      }
    };
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('ielts_progress_updated', handleProgressChange);
      window.removeEventListener('storage', handleProgressChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [refreshProgress, currentPage]);

  // Periodic study timer: increment study time every 30 seconds when active
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const updated = {
          ...prev,
          totalStudySeconds: prev.totalStudySeconds + 30
        };
        saveProgress(updated);
        return updated;
      });
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  const handleNavigate = (page: PublicPage) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResetProgress = () => {
    clearLocalProgress();
    setProgress(getStoredProgress());
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-slate-900 selection:text-white">
      {/* Top Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {currentPage === 'home' && <HomeLanding onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutView onNavigate={handleNavigate} />}
        {currentPage === 'features' && <FeaturesView onNavigate={handleNavigate} />}
        {currentPage === 'preparation' && <PreparationGuide onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactView onNavigate={handleNavigate} />}
        
        {currentPage === 'dashboard' && (
          <DashboardView progress={progress} onNavigate={handleNavigate} />
        )}
        {currentPage === 'reading' && <ReadingView progress={progress} />}
        {currentPage === 'listening' && <ListeningView progress={progress} />}
        {currentPage === 'writing' && <WritingView progress={progress} />}
        {currentPage === 'speaking' && <SpeakingView progress={progress} />}
        {currentPage === 'grammar' && <GrammarView progress={progress} />}
        {currentPage === 'vocabulary' && (
          <VocabularyView progress={progress} onProgressUpdated={refreshProgress} />
        )}
        {currentPage === 'mock-exams' && <MockExamsView progress={progress} />}
        {(currentPage === 'progress' || currentPage === 'results') && (
          <ProgressView
            progress={progress}
            onNavigate={handleNavigate}
            onResetProgress={handleResetProgress}
          />
        )}
        {currentPage === 'history' && (
          <StudyHistoryView progress={progress} onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
