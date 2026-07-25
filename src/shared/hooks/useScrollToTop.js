import { useState, useEffect, useCallback } from 'react';

/**
 * Tracks whether the page has been scrolled past `threshold` and exposes
 * a helper to smooth-scroll back to the top.
 */
const useScrollToTop = (threshold = window.innerHeight) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible((prev) => {
        const shouldShow = window.scrollY > threshold;
        return prev === shouldShow ? prev : shouldShow;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { isVisible, scrollToTop };
};

export default useScrollToTop;
