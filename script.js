document.querySelector('.watch-story').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#our-story').scrollIntoView({ behavior: 'smooth' });
});

const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
    carouselItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}

// Set the first slide to be active initially
showSlide(currentIndex);

// Automatically advance the carousel every 3 seconds (adjust as needed)
setInterval(nextSlide, 3000);