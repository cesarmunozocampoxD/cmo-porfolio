import { useState } from 'react';
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

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', next === 'dark');
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
