const errorPattern = /^\d+$/g;
const zeroPattern = /^0+/g;
let errorText = document.createElement("span");
errorText.textContent = "Can't be zero";

// ===================
// Input Values
//    Check
// ===================

function blankBill() {
  let billAmount = document.querySelector("#bill-amount-input").value;
  tipCalculator();
  if (/^0+/.test(billAmount)) {
    document.querySelector("#bill-amount .error-container span").innerHTML =
      errorText.textContent;
  } else if (errorPattern.test(billAmount)) {
    errorText.textContent = "";
    document.querySelector("#bill-amount .error-container span").innerHTML =
      errorText.textContent;
  } else errorText.textContent = "Pattern doesn't match. Numbers only";
  document.querySelector("#bill-amount .error-container span").innerHTML =
    errorText.textContent;
}

function blankPeople() {
  let numberOfPeople = document.querySelector("#people-qty-input").value;
  tipCalculator();
  if (numberOfPeople == 0) {
    document.querySelector("#qty-people .error-container span").innerHTML =
      errorText.textContent;
  } else if (numberOfPeople != errorPattern) {
    errorText.textContent = "Pattern doesn't match. Numbers only";
    document.querySelector("#qty-people .error-container span").innerHTML =
      errorText.textContent;
  }
}

// ===================
// Get Percentage from
// Radio Buttons
// ===================

function percentage() {
  let radioButton = document.getElementsByName("tip-selection");
  for (let i = 0; i < radioButton.length; i++) {
    if (radioButton[i].checked) {
      return radioButton[i].value;
    }
  }
}

// ===================
// Tip and Total
// Calculations
// ===================

function tipCalculator() {
  let customTip = document.querySelector("#custom-option").value;
  let billAmount = document.querySelector("#bill-amount-input").value;
  let numberOfPeople = document.querySelector("#people-qty-input").value;
  let tipPercentage = percentage();
  let totalPerPerson = document.querySelector("#calculated-total");
  let tipPerPerson = document.querySelector("#calculated-tip");

  if (customTip == 0) {
    let calculatedTipPerPerson =
      (billAmount * (tipPercentage / 100)) / numberOfPeople;
    tipPerPerson.textContent = "";
    tipPerPerson.append("$ " + calculatedTipPerPerson.toFixed(2));

    let calculatedTotal =
      (billAmount * (1 + tipPercentage / 100)) / numberOfPeople;
    totalPerPerson.textContent = "";
    totalPerPerson.append("$ " + calculatedTotal.toFixed(2));
  }

  let radioButton = document.getElementsByName("tip-selection");
  for (let i = 0; i < radioButton.length; i++) {
    radioButton[i].checked = false;
  }
  let calculatedTipPerPerson =
    (billAmount * (customTip / 100)) / numberOfPeople;
  tipPerPerson.textContent = "";
  tipPerPerson.append("$ " + calculatedTipPerPerson.toFixed(2));

  let calculatedTotal = (billAmount * (1 + customTip / 100)) / numberOfPeople;
  totalPerPerson.textContent = "";
  totalPerPerson.append("$ " + calculatedTotal.toFixed(2));
}

// ===================
//     Page Reset
// ===================

function pageReset() {
  errorText.remove();
  document.querySelector("#bill-amount-input").value = "";
  document.querySelector("#people-qty-input").value = "";
  document.querySelector("#custom-option").value = "";
  document.querySelector("#calculated-tip").innerHTML = "$ 0.00";
  document.querySelector("#calculated-total").innerHTML = "$ 0.00";
  let radioButton = document.getElementsByName("tip-selection");
  for (let i = 0; i < radioButton.length; i++) {
    radioButton[i].checked = false;
  }
}
