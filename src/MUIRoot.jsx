// Import MUI theme provider and CssBaseline for global styles
import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const theme = createTheme();

const MUIRoot = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default MUIRoot;
