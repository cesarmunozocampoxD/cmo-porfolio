// Import MUI theme provider and CssBaseline for global styles
import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8e7cc3',
      light: '#b8a9d9',
      dark: '#6b5b95',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
});

const MUIRoot = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default MUIRoot;
