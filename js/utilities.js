// Utilities module for Roxy's Fitness website

/**
 * Create header element
 * @returns {HTMLElement} The created header element
 */
export function createHeader() {
    const header = document.createElement('header');
    header.className = 'py-4 px-6 text-white glass fixed w-full z-50';
    header.innerHTML = `
        <nav class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold">Roxy's Fitness</h1>
            <ul class="hidden md:flex space-x-4">
                <li><a href="#overview" class="hover-lift">Overview</a></li>
                <li><a href="#routines" class="hover-lift">Routines</a></li>
                <li><a href="#videos" class="hover-lift">Videos</a></li>
                <li><a href="#motivation" class="hover-lift">Motivation</a></li>
                <li><a href="#nutrition" class="hover-lift">Nutrition</a></li>
                <li><a href="#contact" class="hover-lift">Contact</a></li>
            </ul>
            <div class="md:hidden">
                <button id="mobile-menu-toggle" class="text-white focus:outline-none">
                    <span class="block w-6 h-0.5 bg-white mb-1.5"></span>
                    <span class="block w-6 h-0.5 bg-white mb-1.5"></span>
                    <span class="block w-6 h-0.5 bg-white"></span>
                </button>
            </div>
        </nav>
    `;
    
    // Add mobile menu toggle functionality
    const toggleButton = header.querySelector('#mobile-menu-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleMobileMenu);
    }
    
    return header;
}

/**
 * Create main content sections
 * @returns {HTMLElement} The created main content element
 */
export function createMainContent() {
    const main = document.createElement('main');
    main.className = "container mx-auto px-4";
    main.innerHTML = `
        <section id="overview" class="py-20 mb-20">
            <div class="text-center">
                <h2 class="text-4xl font-bold mb-4 text-animate">Transform Your Life with Roxy's Fitness</h2>
                <p class="text-xl mb-8 text-animate">Your journey to a healthier you starts here</p>
                <a href="#contact" class="cta-button bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition duration-300">Start Your Transformation</a>
            </div>
            <div id="photos" class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"></div>
        </section>
        
        <section id="routines" class="mb-20">
            <h2 class="text-3xl font-bold mb-10 text-center text-animate">Our Popular Routines</h2>
            <div id="routinesContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
        </section>
        
        <section id="videos" class="mb-20">
            <h2 class="text-3xl font-bold mb-10 text-center text-animate">Workout Videos</h2>
            <div id="videosContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
        </section>
        
        <section id="motivation" class="mb-20">
            <h2 class="text-3xl font-bold mb-10 text-center text-animate">Daily Motivation</h2>
            <div id="gifsContainer" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"></div>
        </section>
        
        <section id="nutrition" class="mb-20">
            <h2 class="text-3xl font-bold mb-10 text-center text-animate">Nutrition Tips</h2>
            <div id="nutritionContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
        </section>
        
        <section id="contact" class="mb-20">
            <h2 class="text-3xl font-bold mb-10 text-center text-animate">Contact Us</h2>
            <form id="contact-form" class="max-w-lg mx-auto glass p-8 rounded-lg">
                <input type="text" placeholder="Name" class="w-full p-3 mb-4 rounded bg-white bg-opacity-20" required>
                <input type="email" placeholder="Email" class="w-full p-3 mb-4 rounded bg-white bg-opacity-20" required>
                <textarea placeholder="Message" class="w-full p-3 mb-4 rounded bg-white bg-opacity-20" rows="4" required></textarea>
                <button type="submit" class="cta-button w-full bg-green-500 text-white font-bold py-3 px-6 rounded hover:bg-green-600 transition duration-300">Send Message</button>
            </form>
        </section>
    `;
    
    // Add contact form submission handler
    const contactForm = main.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    
    return main;
}

/**
 * Create footer element
 * @returns {HTMLElement} The created footer element
 */
export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'text-white p-8 glass mt-20';
    footer.innerHTML = `
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 class="text-2xl font-bold mb-4">Roxy's Fitness for All</h3>
                <p>Transforming lives through fitness since 2010</p>
            </div>
            <div>
                <h3 class="text-2xl font-bold mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    <li><a href="#overview" class="hover-lift">Home</a></li>
                    <li><a href="#routines" class="hover-lift">Routines</a></li>
                    <li><a href="#videos" class="hover-lift">Videos</a></li>
                    <li><a href="#contact" class="hover-lift">Contact</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-2xl font-bold mb-4">Connect With Us</h3>
                <div class="flex space-x-4">
                    <a href="https://www.facebook.com/" target="_blank" class="hover-lift text-2xl"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/" target="_blank" class="hover-lift text-2xl"><i class="fab fa-twitter"></i></a>
                    <a href="https://instagram.com/" target="_blank" class="hover-lift text-2xl"><i class="fab fa-instagram"></i></a>
                    <a href="https://linkedin.com/" target="_blank" class="hover-lift text-2xl"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        <div class="mt-8 text-center">
            <p>&copy; ${new Date().getFullYear()} Roxy's Fitness for All. All rights reserved.</p>
        </div>
    `;
    return footer;
}

/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
    let mobileNav = document.querySelector('.mobile-nav');
    
    if (!mobileNav) {
        // Create mobile menu if it doesn't exist
        mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-nav';
        mobileNav.innerHTML = `
            <div class="mobile-nav-close">&times;</div>
            <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#routines">Routines</a></li>
                <li><a href="#videos">Videos</a></li>
                <li><a href="#motivation">Motivation</a></li>
                <li><a href="#nutrition">Nutrition</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        `;
        document.body.appendChild(mobileNav);
        
        // Set up close button
        const closeBtn = mobileNav.querySelector('.mobile-nav-close');
        closeBtn.addEventListener('click', () => {
            mobileNav.style.display = 'none';
        });
        
        // Set up navigation links
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.style.display = 'none';
                
                // Smooth scroll to section
                const sectionId = link.getAttribute('href');
                const section = document.querySelector(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
    
    // Toggle visibility
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
}

/**
 * Handle contact form submission
 * @param {Event} e - Form submission event
 */
function handleContactFormSubmit(e) {
    e.preventDefault();
    
    // Simple validation
    const nameInput = this.querySelector('input[type="text"]');
    const emailInput = this.querySelector('input[type="email"]');
    const messageInput = this.querySelector('textarea');
    
    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        alert('Please fill in all fields');
        return;
    }
    
    // Display success message (in a real site, this would send data to a server)
    this.innerHTML = `
        <div class="text-center py-8">
            <i class="fas fa-check-circle text-green-500 text-5xl mb-4"></i>
            <h3 class="text-2xl font-bold mb-2">Thank You!</h3>
            <p class="text-gray-200">Your message has been sent successfully. We'll contact you soon!</p>
        </div>
    `;
}

/**
 * Display photos in the gallery
 * @returns {Promise} Promise that resolves when photos are loaded
 */
export function displayPhotos() {
    let photosContainer = document.getElementById('photos');
    if (!photosContainer) {
        console.warn('Photos container not found');
        return Promise.resolve();
    }
    
    // Use local images instead of API
    const galleryImages = [
        'img/gallery-1.jpg',
        'img/gallery-2.jpg',
        'img/gallery-3.jpg',
        'img/gallery-4.jpg'
    ];
    
    // Clear existing content
    photosContainer.innerHTML = '';
    
    // Add images to gallery
    galleryImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Fitness Gallery Image';
        imgElement.classList.add('w-full', 'h-64', 'object-cover', 'rounded-lg', 'shadow-lg', 'hover:shadow-xl', 'transition', 'duration-300');
        photosContainer.appendChild(imgElement);
    });
    
    return Promise.resolve();
}

/**
 * Display fitness routines
 */
export function displayRoutines() {
    const routinesContainer = document.getElementById('routinesContainer');
    if (!routinesContainer) {
        console.warn('Routines container not found');
        return;
    }
    
    const routines = [
        { title: 'Morning Yoga', description: 'Start your day with a refreshing yoga routine to energize your body and mind.', icon: 'fa-solid fa-sun' },
        { title: 'HIIT Workout', description: 'High-intensity interval training for maximum calorie burn and improved cardiovascular health.', icon: 'fa-solid fa-fire' },
        { title: 'Strength Training', description: 'Build muscle and increase your metabolism with our comprehensive strength training program.', icon: 'fa-solid fa-dumbbell' },
        { title: 'Cardio Blast', description: 'Get your heart pumping with our high-energy cardio workout designed for all fitness levels.', icon: 'fa-solid fa-heart-pulse' },
        { title: 'Flexibility & Balance', description: 'Improve your flexibility and balance with this gentle yet effective routine.', icon: 'fa-solid fa-person-skating' },
        { title: 'Core Crusher', description: 'Strengthen your core with this targeted ab workout for a stronger, more stable you.', icon: 'fa-solid fa-apple-whole' }
    ];

    routines.forEach(routine => {
        const routineElement = document.createElement('div');
        routineElement.className = 'routine card-3d bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300';
        routineElement.innerHTML = `
            <div class="card-3d-inner">
                <div class="card-3d-front flex flex-col items-center justify-center p-4">
                    <i class="${routine.icon} text-4xl text-green-500 mb-2"></i>
                    <h3 class="text-xl font-bold mb-2">${routine.title}</h3>
                </div>
                <div class="card-3d-back flex items-center justify-center p-4">
                    <p class="text-sm">${routine.description}</p>
                </div>
            </div>
        `;
        routinesContainer.appendChild(routineElement);
    });
}

/**
 * Fetch and display workout videos (using local data instead of API)
 * @returns {Promise} Promise that resolves when videos are loaded
 */
export function fetchVideos() {
    const videosContainer = document.getElementById('videosContainer');
    if (!videosContainer) {
        console.warn('Videos container not found');
        return Promise.resolve();
    }
    
    // Local video data
    const videos = [
        {
            title: '30-Minute Full Body HIIT',
            description: 'Burn calories and build strength with this high-intensity interval training.',
            thumbnail: 'img/video-hiit.jpg',
            videoId: 'video1'
        },
        {
            title: 'Beginner Yoga Flow',
            description: 'A gentle introduction to yoga for improved flexibility and relaxation.',
            thumbnail: 'img/video-yoga.jpg',
            videoId: 'video2'
        },
        {
            title: 'Core Strengthening',
            description: 'Build a strong core with these effective exercises for abs and back.',
            thumbnail: 'img/video-core.jpg',
            videoId: 'video3'
        },
        {
            title: 'Upper Body Workout',
            description: 'Sculpt and strengthen your arms, chest, and back with this routine.',
            thumbnail: 'img/video-upper.jpg',
            videoId: 'video4'
        },
        {
            title: 'Cardio Dance Party',
            description: 'Have fun while burning calories with this energetic dance workout.',
            thumbnail: 'img/video-dance.jpg',
            videoId: 'video5'
        },
        {
            title: 'Recovery Stretching',
            description: 'Improve flexibility and reduce muscle soreness with these stretches.',
            thumbnail: 'img/video-stretch.jpg',
            videoId: 'video6'
        }
    ];
    
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video', 'bg-white', 'p-4', 'rounded-lg', 'shadow-lg', 'hover:shadow-xl', 'transition', 'duration-300');
        videoElement.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-48 object-cover rounded-lg mb-4">
            <h3 class="font-bold text-xl mb-2">${video.title}</h3>
            <p class="text-sm text-gray-600 mb-4">${video.description}</p>
            <a href="#videos" class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">Watch Video</a>
        `;
        videosContainer.appendChild(videoElement);
    });
    
    return Promise.resolve();
}

/**
 * Fetch and display motivational content (using local data instead of API)
 * @returns {Promise} Promise that resolves when content is loaded
 */
export function fetchGifs() {
    const gifsContainer = document.getElementById('gifsContainer');
    if (!gifsContainer) {
        console.warn('GIFs container not found');
        return Promise.resolve();
    }
    
    // Local motivation data
    const motivationItems = [
        { title: 'Push your limits', image: 'img/motivation-1.jpg' },
        { title: 'Every step counts', image: 'img/motivation-2.jpg' },
        { title: 'Stay consistent', image: 'img/motivation-3.jpg' },
        { title: 'Believe in yourself', image: 'img/motivation-4.jpg' },
        { title: 'Strength comes from within', image: 'img/motivation-5.jpg' },
        { title: 'Never give up', image: 'img/motivation-6.jpg' },
        { title: 'Progress, not perfection', image: 'img/motivation-7.jpg' },
        { title: 'Challenge yourself daily', image: 'img/motivation-8.jpg' }
    ];
    
    motivationItems.forEach(item => {
        const gifElement = document.createElement('div');
        gifElement.classList.add('gif', 'bg-white', 'p-2', 'rounded-lg', 'shadow-lg', 'hover:shadow-xl', 'transition', 'duration-300');
        gifElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover rounded-lg">
            <p class="text-sm text-center mt-2">${item.title}</p>
        `;
        gifsContainer.appendChild(gifElement);
    });
    
    return Promise.resolve();
}

/**
 * Display nutrition tips
 */
export function displayNutritionTips() {
    const nutritionContainer = document.getElementById('nutritionContainer');
    if (!nutritionContainer) {
        console.warn('Nutrition container not found');
        return;
    }
    
    const tips = [
        { title: 'Stay Hydrated', content: 'Drink at least 8 glasses of water daily to maintain proper hydration and support your body\'s functions.', icon: 'fa-solid fa-glass-water' },
        { title: 'Eat Colorful Meals', content: 'Include a variety of colorful fruits and vegetables in your diet to ensure you\'re getting a wide range of nutrients.', icon: 'fa-solid fa-carrot' },
        { title: 'Portion Control', content: 'Use smaller plates and practice mindful eating to control portion sizes and avoid overeating.', icon: 'fa-solid fa-utensils' },
        { title: 'Protein with Every Meal', content: 'Include a source of lean protein with each meal to support muscle growth and repair.', icon: 'fa-solid fa-egg' },
        { title: 'Limit Processed Foods', content: 'Focus on whole, unprocessed foods to maximize nutrient intake and minimize empty calories.', icon: 'fa-solid fa-ban' },
        { title: 'Plan Your Meals', content: 'Prepare meals in advance to ensure you always have healthy options available and avoid impulsive eating.', icon: 'fa-solid fa-calendar-days' }
    ];
    
    tips.forEach(tip => {
        const tipElement = document.createElement('div');
        tipElement.classList.add('tip', 'bg-white', 'p-6', 'rounded-lg', 'shadow-lg', 'hover:shadow-xl', 'transition', 'duration-300');
        tipElement.innerHTML = `
            <i class="${tip.icon} text-4xl text-green-500 mb-4"></i>
            <h3 class="text-xl font-bold mb-2">${tip.title}</h3>
            <p>${tip.content}</p>
        `;
        nutritionContainer.appendChild(tipElement);
    });
}

/**
 * Toggle section visibility
 * @param {string} sectionId - ID of the section to show
 */
export function toggleSectionVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    section.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Initialize AOS (Animate On Scroll) library
 */
export function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false
        });
    } else {
        console.warn('AOS library not loaded');
    }
}