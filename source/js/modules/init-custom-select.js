let initCustomSelect = () => {
  let selectTop = document.querySelector('.custom-select__top');
  let selectItem = document.querySelectorAll('.custom-select__item');

  selectTop.addEventListener('click', selectToggle);

  selectItem.forEach((item) => {
    item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText;
    initCustomSelect = this.closest('.custom-select');
    let currentText = initCustomSelect.querySelector('.custom-select__current');
    currentText.innerText = text;
    initCustomSelect.classList.remove('is-active');
  }
};

export {initCustomSelect};
