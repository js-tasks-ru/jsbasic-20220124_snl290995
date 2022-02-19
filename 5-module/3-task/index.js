function initCarousel() {
  let arrowRigth = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let left = arrowLeft.addEventListener('click', leftWay);
  let rigth = arrowRigth.addEventListener('click', rigthWay);

  let carouselInnerElem = document.querySelector('.carousel__inner');
  let currentSlideNumber = 0;   
  
  arrowLeft.style.display = 'none';

  function update() {
    if (currentSlideNumber == 3) {
        arrowRigth.style.display = 'none';
    } else {
      arrowRigth.style.display = '';
    }

    if (currentSlideNumber == 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }
  }

  function rigthWay() {
    currentSlideNumber += 1; 
    let offset = -carouselInnerElem.offsetWidth * currentSlideNumber;
    let arrowRigth = document.querySelector('.carousel__arrow_right');
      carouselInnerElem.style.transform = `translateX(${offset}px)`;

      update();
    }
  
  function leftWay() {
      currentSlideNumber -= 1; 
      let offset = -carouselInnerElem.offsetWidth * currentSlideNumber;
      carouselInnerElem.style.transform = `translateX(${offset}px)`;
      
      update();
  }

}