import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import AboutMe from './AboutMe.jsx';
import MUIRoot from './MUIRoot.jsx';
import Banner from './Banner.jsx';
import Services from './Services.jsx';
import Courses from './Courses.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import './App.css';

function Layout({ mode, onToggleMode }) {
  return (
    <MUIRoot mode={mode}>
      <CssBaseline />
      <Banner mode={mode} onToggleMode={onToggleMode} />
      <Outlet />
      <Footer />
    </MUIRoot>
  );
}

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

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
