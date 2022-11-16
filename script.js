const fundSliderSettings = {
  autoPlayInterval: 8,
};

let slideIndex = 0;
document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
});

let autoPlayInterval = setInterval(
  autoPlaySlider,
  fundSliderSettings.autoPlayInterval * 1000
);

function currentSlide(n) {
  console.log("current slide function");
  clearInterval(autoPlayInterval);
  showSlides((slideIndex += n));
  autoPlayInterval = setInterval(
    autoPlaySlider,
    fundSliderSettings.autoPlayInterval * 1000
  );
}

function showSlides(slideIndex) {
  activeSlide(slideIndex);
}

function activeSlide(currentIndex) {
  let slides = document.querySelectorAll(".glider-slide");
  console.log(currentIndex);

  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
    slideIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide, index) => {
    if (currentIndex === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function autoPlaySlider() {
  console.log("autoplayslider run");
  let slides = document.querySelectorAll(".glider-slide");
  const currentActiveSlide = document.querySelector(".glider-slide.active");
  let activeIndex = Array.prototype.indexOf.call(slides, currentActiveSlide);
  if (slides.length === activeIndex + 1) {
    activeIndex = 0;
    slideIndex = 0;
    activeSlide(activeIndex);
  } else if (activeIndex >= 0) {
    slideIndex = slideIndex + 1;
    activeSlide(activeIndex + 1);
  }
}
