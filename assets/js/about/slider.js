let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mem-profile");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex == slides.length) {
    slides[slideIndex - 1].style.display = "block";
    slides[0].style.display = "block";
    slides[1].style.display = "block";
  } else if (slideIndex + 1 == slides.length) {
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex].style.display = "block";
    slides[0].style.display = "block";
  } else if (slideIndex > slides.length) {
    slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex].style.display = "block";
    slides[slideIndex + 1].style.display = "block";
  } else {
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex].style.display = "block";
    slides[slideIndex + 1].style.display = "block";
  }
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
