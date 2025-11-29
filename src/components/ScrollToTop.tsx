import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ behavior = 'smooth' }: { behavior?: ScrollBehavior }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior });
    }
  }, [pathname, behavior]);

  return null;
};

export default ScrollToTop;
