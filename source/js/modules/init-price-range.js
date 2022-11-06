const initPriceRange = () => {
  let value = document.getElementById('current-value').value;

  const fuelCost = "45.50";
  const fuelFullCost = "49.59";

  function calculatePrice() {
    let totalPrice = (value * fuelCost).toFixed(2);
    let celTotalPrice = document.querySelector('[data-label="total-price"]');
    celTotalPrice.innerHTML = totalPrice;

    let fullPrice = value * fuelFullCost;
    let profit = (Math.round(fullPrice - totalPrice)).toFixed(2);
    let celProfit = document.querySelector('[data-label="profit"]');
    celProfit.innerHTML = profit;
  }
  calculatePrice();

  document.getElementById('custom-slider').addEventListener('input', function (event) {
    value = event.target.value;
    document.getElementById('current-value').value = value;
    calculatePrice();
  });
};

export {initPriceRange};
