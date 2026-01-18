import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ScrollArrows = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      
      setShowScrollTop(scrollTop > 100);
      
      setShowScrollDown(scrollTop < scrollHeight - clientHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    window.scrollTo({
      top: scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed right-6 bottom-2 flex flex-col space-y-2 z-50">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-white text-[#147783] hover:bg-[#1B9AAA] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 font-semibold"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
      
      {/* Scroll to Bottom Button */}
      {showScrollDown && (
        <button
          onClick={scrollToBottom}
          className="bg-white text-[#147783] hover:bg-[#1B9AAA] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 font-semibold"
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollArrows;
