document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    let isPaused = false;
  
    function moveCarousel() {
      if (!isPaused) {
        const firstImage = carousel.firstElementChild;
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(${-firstImage.offsetWidth}px)`;
  
        setTimeout(() => {
          carousel.appendChild(firstImage);
          carousel.style.transition = 'none';
          carousel.style.transform = 'translateX(0)';
        }, 500);
      }
    }
  
    function pauseCarousel() {
      isPaused = true;
    }
  
    function playCarousel() {
      isPaused = false;
    }
  
    // Set interval to move the carousel every 2 seconds
    setInterval(moveCarousel, 2000);
  
    // Pause the carousel on mouseover
    carousel.addEventListener('mouseover', pauseCarousel);
  
    // Resume the carousel on mouseout
    carousel.addEventListener('mouseout', playCarousel);
  });
  