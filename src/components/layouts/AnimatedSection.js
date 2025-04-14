import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const AnimatedSection = ({ children, className, animation = 'fade-up' }) => {
    const [ref, isVisible] = useScrollAnimation(0.1);

    const animations = {
        'fade-up': 'opacity-0 translate-y-10 transition-all duration-700 ease-out',
        'fade-down': 'opacity-0 -translate-y-10 transition-all duration-700 ease-out',
        'fade-left': 'opacity-0 translate-x-10 transition-all duration-700 ease-out',
        'fade-right': 'opacity-0 -translate-x-10 transition-all duration-700 ease-out',
        'zoom-in': 'opacity-0 scale-95 transition-all duration-700 ease-out',
        'zoom-out': 'opacity-0 scale-105 transition-all duration-700 ease-out',
    };

    return (
        <div
            ref={ref}
            className={`${className} ${animations[animation]} ${isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : ''
                }`}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
