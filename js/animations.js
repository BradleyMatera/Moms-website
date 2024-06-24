// animations.js

// Throttle function to limit the frequency of event handler execution
const throttle = (func, limit) => {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Initialize custom cursor
export const initCustomCursor = () => {
    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', throttle((e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }, 16)); // Throttle to approximately 60fps
};

// Initialize parallax effect
export const initParallax = () => {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    parallaxSections.forEach(section => {
        const bg = section.getAttribute('data-bg');
        if (bg) {
            section.style.backgroundImage = `url(${bg})`;
        }
    });
};

// Initialize text animations
export const initTextAnimations = () => {
    const textElements = document.querySelectorAll('.text-animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    textElements.forEach(el => observer.observe(el));
};

// Initialize 3D card animations
export const init3DCards = () => {
    const cards = document.querySelectorAll('.card-3d');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.card-3d-inner').style.transform = 'rotateY(180deg)';
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('.card-3d-inner').style.transform = 'rotateY(0deg)';
        });
    });
};

// Initialize SVG animations
export const initSvgAnimations = () => {
    const svgs = document.querySelectorAll('.svg-animate');
    svgs.forEach(svg => {
        const paths = svg.querySelectorAll('path');
        paths.forEach(path => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
        });
    });
};

// Initialize micro-interactions
export const initMicroInteractions = () => {
    const hoverElements = document.querySelectorAll('.hover-lift');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.transform = 'translateY(-3px)';
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translateY(0)';
        });
    });

    const pulseElements = document.querySelectorAll('.pulse');
    pulseElements.forEach(el => {
        setInterval(() => {
            el.classList.add('animate-pulse');
            setTimeout(() => el.classList.remove('animate-pulse'), 2000);
        }, 4000);
    });
};

// Ensure the event handlers are initialized only once
document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initParallax();
    initTextAnimations();
    init3DCards();
    initSvgAnimations();
    initMicroInteractions();
});
