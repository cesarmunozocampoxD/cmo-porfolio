import { useState } from 'react';
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

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <MUIRoot mode={mode}>
      <CssBaseline />
      <Banner mode={mode} onToggleMode={toggleMode} />
      <AboutMe />
      <Services />
      <Courses />
      <Projects />
      <Contact />
      <Footer />
    </MUIRoot>
  );
}

export default App;
