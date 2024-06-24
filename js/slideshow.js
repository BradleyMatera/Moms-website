const slideshowImages = [
    'img/A_high-quality_header_image_for_a_fitness_website_.png',
    'img/A_dynamic_banner_image_for_a_fitness_website_showi.png',
    'img/A_motivational_hero_image_for_a_fitness_website_fe.png',
    'img/outdoor-workout.jpg',
    'img/training-session.jpg'
];

let currentSlide = 0;

export function initializeSlideshow() {
    const slideshow = document.getElementById('slideshow');
    slideshow.style.backgroundImage = `url(${slideshowImages[0]})`;

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function nextSlide() {
    const slideshow = document.getElementById('slideshow');
    currentSlide = (currentSlide + 1) % slideshowImages.length;
    slideshow.style.backgroundImage = `url(${slideshowImages[currentSlide]})`;
}
