import { useState } from 'react'
import { CssBaseline } from '@mui/material';
import AboutMe from './AboutMe.jsx';
import MUIRoot from './MUIRoot.jsx';
import Banner from './Banner.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MUIRoot>
      <CssBaseline />
      <Banner />
      <AboutMe />
    </MUIRoot>
    
  )
}

export default App
