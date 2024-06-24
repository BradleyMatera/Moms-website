export function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
}

export function initParallax() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    parallaxSections.forEach(section => {
        const bg = section.getAttribute('data-bg');
        if (bg) {
            section.style.backgroundImage = `url(${bg})`;
        }
    });
}

export function initTextAnimations() {
    const textElements = document.querySelectorAll('.text-animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    textElements.forEach(el => observer.observe(el));
}

export function init3DCards() {
    const cards = document.querySelectorAll('.card-3d');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.card-3d-inner').style.transform = 'rotateY(180deg)';
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('.card-3d-inner').style.transform = 'rotateY(0deg)';
        });
    });
}

export function initSvgAnimations() {
    const svgs = document.querySelectorAll('.svg-animate');
    svgs.forEach(svg => {
        const paths = svg.querySelectorAll('path');
        paths.forEach(path => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
        });
    });
}

export function initMicroInteractions() {
    const hoverElements = document.querySelectorAll('.hover-lift');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.transform = 'translateY(-5px)';
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
}
// Utility function to throttle events
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

// Custom Cursor Initialization
export const initCustomCursor = () => {
    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', throttle((e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }, 16)); // Throttle to approximately 60fps
};
