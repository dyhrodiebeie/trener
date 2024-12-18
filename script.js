document.addEventListener('DOMContentLoaded', function() {
    // Team slider functionality
    const slider = document.querySelector('.team-members');
    const slides = document.querySelectorAll('.team-member');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    
    let currentIndex = 0;
    const slidesToShow = window.innerWidth <= 768 ? 1 : 3;
    
    // Update slide position
    function updateSlider() {
        const slideWidth = slides[0].offsetWidth;
        const gap = window.innerWidth <= 768 ? 0 : 30;
        const offset = -(currentIndex * (slideWidth + gap));
        slider.style.transform = `translateX(${offset}px)`;
    }
    
    // Handle next button click
    function nextSlide() {
        const maxIndex = slides.length - slidesToShow;
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    }
    
    // Handle previous button click
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }
    
    // Add event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        const newSlidesToShow = window.innerWidth <= 768 ? 1 : 3;
        if (newSlidesToShow !== slidesToShow) {
            currentIndex = 0;
            updateSlider();
        }
    });
    
    // Initialize slider
    updateSlider();

    // Initialize map
    function initMap() {
        const moscowCoordinates = { lat: 55.7558, lng: 37.6173 };
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: moscowCoordinates,
            styles: [
                {
                    stylers: [
                        { saturation: -100 }
                    ]
                }
            ]
        });

        new google.maps.Marker({
            position: moscowCoordinates,
            map: map,
            title: 'FitZone'
        });
    }

    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    window.initMap = initMap;
});
