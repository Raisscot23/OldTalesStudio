const container = document.querySelector('.testimonios-container');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
const totalItems = document.querySelectorAll('.testimonio').length;
const visibleItems = 3;

next.addEventListener('click', () => {
    if (index >= totalItems - visibleItems) {
        index = 0; 
    } else {
        index++;
    }
    updateCarousel();
});

prev.addEventListener('click', () => {
    if (index <= 0) {
        index = totalItems - visibleItems;
    } else {
        index--;
    }
    updateCarousel();
});

function updateCarousel() {
    const slide = document.querySelector('.testimonio');
    const slideWidth = slide.offsetWidth + 20;
    container.style.transform = `translateX(-${index * slideWidth}px)`;
}