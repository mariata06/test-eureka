const initPartnersSlider = () => {
  const partnersSlider = new Swiper('.partners__container', {
    loop: true,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    a11y: {
      nextSlideMessage: 'Следующий слайд',
      prevSlideMessage: 'Предыдущий слайд',
    },
    slidesPerView: 'auto',
  });
};

export {initPartnersSlider};
