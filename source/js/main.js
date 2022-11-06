import {initCertSlider} from './modules/init-cert-slider';
import {initPartnersSlider} from './modules/init-partners-slider';
import {initReviewSlider} from './modules/init-review-slider';
import {initCustomSelect} from './modules/init-custom-select';
import {initSmoothScroll} from './modules/init-smooth-scroll';
import {initPriceRange} from './modules/init-price-range';
import {initPhoneValidate} from './modules/init-phone-validate';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  initCertSlider();
  initPartnersSlider();
  initReviewSlider();
  initSmoothScroll();
  initPriceRange();
  initPhoneValidate('[name="phone"]');

  window.addEventListener('load', () => {

    initCustomSelect();
  });
});
