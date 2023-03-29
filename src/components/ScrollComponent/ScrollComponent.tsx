import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // get current pathname

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top-left corner
  }, [pathname]);

  return null;
};

export default ScrollToTop;
