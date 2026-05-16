// Import MUI theme provider and CssBaseline for global styles
import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#1976D2',
        light: '#1E88E5',
        dark: '#6b5b95',
      },
      background: {
        default: mode === 'dark' ? '#121212' : '#ffffff',
        paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',
      },
    },
  });

const MUIRoot = ({ children, mode = 'light' }) => (
  <ThemeProvider theme={getTheme(mode)}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default MUIRoot;
