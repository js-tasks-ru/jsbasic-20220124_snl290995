import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = createElement(`
          <div class="carousel">
            <div class="carousel__arrow carousel__arrow_right">
              <img src="/assets/images/icons/angle-icon.svg" alt="icon">
            </div>
            <div class="carousel__arrow carousel__arrow_left">
              <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
            </div>
            <div class="carousel__inner">
            ${inner(slides)}
            </div>
          </div>`      
        );    
      
          function inner(slides) {
          let items = '';
              for (let i=0; i<slides.length; i++){
                items +=`           
                    <div class="carousel__slide" data-id=${slides[i].id}>
                      <img src="/assets/images/carousel/${slides[i].image}" class="carousel__img" alt="slide">
                      <div class="carousel__caption">
                          <span class="carousel__price">€${slides[i].price.toFixed(2)}</span>
                          <div class="carousel__title">${slides[i].name}</div>
                          <button type="button" class="carousel__button">
                            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                          </button>
                      </div>
                    </div>
                `}
              return items;
          }         
      
    

              let currentSlideNumber = 0; 
              let carouselInnerElem = this.elem.querySelector('.carousel__inner');
              let arrowRigth = this.elem.querySelector('.carousel__arrow_right');
              let arrowLeft = this.elem.querySelector('.carousel__arrow_left');
              let left = arrowLeft.addEventListener('click', leftWay);
              let rigth = arrowRigth.addEventListener('click', rigthWay);

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
        carouselInnerElem.style.transform = `translateX(${offset}px)`;
  
        update();
      }
    
    function leftWay() {
        currentSlideNumber -= 1; 
        let offset = -carouselInnerElem.offsetWidth * currentSlideNumber;
        carouselInnerElem.style.transform = `translateX(${offset}px)`;
        
        update();
    }

    let buttonAdd = this.elem.querySelector('.carousel__button');

    buttonAdd.addEventListener('click', () => {
      const productaddEvent = new CustomEvent('product-add', {
        detail: buttonAdd.closest('.carousel__slide').dataset.id,
        bubbles: true
      });
      this.elem.dispatchEvent(productaddEvent);
      });
      

    
    
  }
}
