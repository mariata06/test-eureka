const initCertSlider = () => {
    const certificateSlider = new Swiper('.documents__slider-container', {
      loop: true,
      direction: 'horizontal',
      navigation: {
        nextEl: '.documents__slide-next',
        prevEl: '.documents__slide-prev',
      },
      a11y: {
        nextSlideMessage: 'Следующий слайд',
        prevSlideMessage: 'Предыдущий слайд',
      },
      slidesPerView: 'auto',
    });
  };

export {initCertSlider};
