import { useEffect, useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import AboutMe from '../features/about/components/AboutMe.jsx';
import MUIRoot from './providers.jsx';
import Banner from '../shared/components/layout/Banner.jsx';
import Services from '../features/services/components/Services.jsx';
import Courses from '../features/courses/components/Courses.jsx';
import Projects from '../features/projects/components/Projects.jsx';
import Contact from '../features/contact/components/Contact.jsx';
import Footer from '../shared/components/layout/Footer.jsx';
import ScrollToTopButton from '../shared/components/ui/ScrollToTopButton.jsx';
import './App.css';

function Layout({ mode, onToggleMode }) {
  return (
    <MUIRoot mode={mode}>
      <CssBaseline />
      <Banner mode={mode} onToggleMode={onToggleMode} />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </MUIRoot>
  );
}

const THEME_STORAGE_KEY = 'theme-mode';

const getInitialMode = () => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // localStorage unavailable (e.g. strict private browsing)
  }
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

function App() {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // localStorage unavailable; theme still updates for this session
      }
      return next;
    });
  };

  return (
    <Routes>
      <Route element={<Layout mode={mode} onToggleMode={toggleMode} />}>
        <Route path="/" element={<AboutMe />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
