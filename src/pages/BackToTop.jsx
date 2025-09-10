import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollTop}
      className={`btn btn-primary btn-lg-square back-to-top ${
        showTop ? 'show' : ''
      }`}
      style={{
        position: 'fixed',
        right: 20,
        bottom: 20,
        display: showTop ? 'inline-flex' : 'none',
        zIndex: 9999,
      }}
    >
      ↑
    </button>
  );
};

export default BackToTop;
