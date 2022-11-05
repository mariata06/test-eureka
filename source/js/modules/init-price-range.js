const initPriceRange = () => {

  let value = event.target.value;
  document.getElementById('current-value').value = value;
  console.log(document.getElementById('current-value').value);
  function calculatePrice() {
    const fuelCost = "45.50";
    const fuelFullCost = "49.59";


    let totalPrice = (value * fuelCost).toFixed(2);
    let celTotalPrice = document.querySelector('[data-label="total-price"]');
    celTotalPrice.innerHTML = totalPrice;
    let fullPrice = value * fuelFullCost;
    let profit = (Math.round(fullPrice - totalPrice)).toFixed(2);
    let celProfit = document.querySelector('[data-label="profit"]');
    celProfit.innerHTML = profit;
  }
  calculatePrice();

  // function calculatePrice() {
    // const fuelCost = "45.50";
    // const fuelFullCost = "49.59";
    // let value = event.target.value;
    // document.getElementById('current-value').value = value;

    // let totalPrice = (value * fuelCost).toFixed(2);
    // let celTotalPrice = document.querySelector('[data-label="total-price"]');
    // celTotalPrice.innerHTML = totalPrice;

    // let fullPrice = value * fuelFullCost;
    // let profit = (Math.round(fullPrice - totalPrice)).toFixed(2);
    // let celProfit = document.querySelector('[data-label="profit"]');
    // celProfit.innerHTML = profit;
  // }
  document.getElementById('custom-slider').addEventListener('input', function (event) {

    calculatePrice();

    // function calculatePrice() {
    //   const fuelCost = "45.50";
    //   const fuelFullCost = "49.59";
    //   let value = event.target.value;
    //   document.getElementById('current-value').value = value;

    //   let totalPrice = (value * fuelCost).toFixed(2);
    //   let celTotalPrice = document.querySelector('[data-label="total-price"]');
    //   celTotalPrice.innerHTML = totalPrice;

    //   let fullPrice = value * fuelFullCost;
    //   let profit = (Math.round(fullPrice - totalPrice)).toFixed(2);
    //   let celProfit = document.querySelector('[data-label="profit"]');
    //   celProfit.innerHTML = profit;
    // }
  });
};

export {initPriceRange};
