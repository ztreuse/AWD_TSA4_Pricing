// var carousel = document.querySelector('#carouselExampleAutoplaying');
// var nextButton = carousel.querySelector('.carousel-control-next');
// var prevButton = carousel.querySelector('.carousel-control-prev');

// carousel.addEventListener('slide.bs.carousel', function () {
//   // Disable the next and previous buttons when the slide event starts
//   nextButton.setAttribute('disabled', 'disabled');
//   prevButton.setAttribute('disabled', 'disabled');
// });

// carousel.addEventListener('slid.bs.carousel', function () {
//   // Enable the next and previous buttons when the slide event ends
//   nextButton.removeAttribute('disabled');
//   prevButton.removeAttribute('disabled');
// });

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});