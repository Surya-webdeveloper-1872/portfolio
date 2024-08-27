let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
    updateRadioButtons();
}

function goToSlide(index) {
    currentSlide = index;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
    updateRadioButtons();
}

function updateRadioButtons() {
    const radios = document.querySelectorAll('.radio-buttons input[type="radio"]');
    radios[currentSlide].checked = true;
}
