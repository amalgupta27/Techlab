document.addEventListener('DOMContentLoaded', () => {
    // Mode toggle functionality
    const modeToggle = document.getElementById('mode-toggle');
    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelectorAll('.signup, .register, .learn-more').forEach(button => {
            button.classList.toggle('dark-mode');
        });
        document.querySelectorAll('#clients, #services, #case-studies, #statistics, #footer-design').forEach(section => {
            section.classList.toggle('dark-mode');
        });
    });

    // Carousel functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const prevButton = document.querySelector('.carousel-controls .prev');
    const nextButton = document.querySelector('.carousel-controls .next');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);

    // Count-up animation functionality
    const countUpElements = document.querySelectorAll('.count-up');
    countUpElements.forEach(el => {
        const endValue = parseInt(el.getAttribute('data-count'));
        const duration = 2000;
        let startValue = 0;
        const increment = endValue / (duration / 16);

        function updateCounter() {
            startValue += increment;
            if (startValue >= endValue) {
                el.textContent = endValue;
            } else {
                el.textContent = Math.ceil(startValue);
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    });

    // Smooth scroll functionality
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});
