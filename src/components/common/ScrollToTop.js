import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top handler
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 800,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-[#3d757c] to-[#356166] text-white flex items-center justify-center shadow-lg z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            aria-label="Scroll to top"
        >
            <FaArrowUp className="text-xl" />
        </button>
    );
};

export default ScrollToTop;
