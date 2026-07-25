import React from 'react';
import './ScrollToTopButton.css';
import { Fab, Zoom } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import useScrollToTop from '../../hooks/useScrollToTop';

const ScrollToTopButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <Zoom in={isVisible}>
      <Fab
        className="scroll-to-top"
        color="primary"
        size="medium"
        aria-label="scroll back to top"
        onClick={scrollToTop}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopButton;
