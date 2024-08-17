let currentIndex = 0;

function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const indicatorsContainer = document.getElementById('indicators');
    
    // ایجاد نقاط ناوبری به ازای هر اسلاید
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => currentSlide(index));
        indicatorsContainer.appendChild(dot);
    });

    updateSlide();
}

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    updateSlide();
}

function currentSlide(index) {
    currentIndex = index;
    updateSlide();
}

function updateSlide() {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// اولین نقطه به صورت پیش‌فرض فعال باشد
initSlider();
``
