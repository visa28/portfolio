const carousel = document.querySelector('.carousel');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Update opacity based on current index
function updateOpacity() {
    items.forEach((item, index) => {
        if (index === currentIndex) {
            item.style.opacity = "100"; // Center image
        } else if (index === currentIndex - 1 || index === currentIndex + 1) {
            item.style.opacity = "0.9"; // Side images
        } else {
            item.style.opacity = "0.4"; // Hidden
        }
    });
}

// Move carousel to the right
rightArrow.addEventListener('click', () => {
    if (currentIndex < totalItems - 3) {
        currentIndex++;
        carousel.style.transform = `translateX(-${currentIndex * 320}px)`; // Adjust based on image size + margin
        updateOpacity();
    }
});

// Move carousel to the left
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * 320}px)`;
        updateOpacity();
    }
});

updateOpacity(); // Initial setup
