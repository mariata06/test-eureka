const initReviewSlider = () => {
  const reviewSlider = new Swiper('.reviews__slider-container', {
    loop: true,
    direction: 'horizontal',
    navigation: {
      nextEl: '.reviews__slide-next',
      prevEl: '.reviews__slide-prev',
    },
    a11y: {
      nextSlideMessage: 'Следующий слайд',
      prevSlideMessage: 'Предыдущий слайд',
    },
    slidesPerView: 'auto',
  });
};

export {initReviewSlider};
