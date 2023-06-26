const errorPattern = /^[0-9]+$/;
const zeroPattern = /^[0]+$/;
let errorText = document.createElement("span");
let customTipInputError = document.createElement("p");
// ===================
// Input Values
//    Check
// ===================

function blankBill() {
  let billAmount = document.querySelector("#bill-amount-input").value;

  if (billAmount == 0) {
    errorText.textContent = "Can't be zero";
    document.querySelector("#bill-amount .error-container span").innerHTML =
      errorText.textContent;
  } else if (errorPattern.test(billAmount)) {
    errorText.textContent = "";
    document.querySelector("#bill-amount .error-container-span").innerHTML =
      errorText.textContent;
    // tipCalculator();
  } else errorText.textContent = "Pattern doesn't match. Numbers only";
  document.querySelector("#bill-amount .error-container span").innerHTML =
    errorText.textContent;
}

function blankPeople() {
  let numberOfPeople = document.querySelector("#people-qty-input").value;

  if (numberOfPeople == 0) {
    errorText.textContent = "Can't be zero";
    document.querySelector("#qty-people .error-container-span").innerHTML =
      errorText.textContent;
  } else if (errorPattern.test(numberOfPeople)) {
    errorText.textContent = "";
    document.querySelector("#qty-people .error-container span").innerHTML =
      errorText.textContent;
    tipCalculator();
  } else errorText.textContent = "Pattern doesn't match. Numbers only";
  document.querySelector("#qty-people .error-container span").innerHTML =
    errorText.textContent;
}

function customTip() {
  let customTipValue = document.querySelector("#custom-option").value;

  customTipInputError.innerHTML = "";
  if (!errorPattern.test(customTipValue)) {
    document
      .querySelector("label[for=custom-option]")
      .appendChild(customTipInputError);
    customTipInputError.innerHTML = "Pattern doesn't match";
  } else tipCalculator();
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
//     Page Reset
// ===================

function tipButtonReset() {
  let radioButton = document.getElementsByName("tip-selection");
  for (let i = 0; i < radioButton.length; i++) {
    radioButton[i].checked = false;
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

  if (typeof tipPercentage == "undefined") {
    let calculatedTotal = billAmount / numberOfPeople;
    totalPerPerson.textContent = "";
    totalPerPerson.append("$ " + calculatedTotal.toFixed(2));
  } else if (customTip.length == 0) {
    let calculatedTipPerPerson =
      (billAmount * (tipPercentage / 100)) / numberOfPeople;
    tipPerPerson.textContent = "";
    tipPerPerson.append("$ " + calculatedTipPerPerson.toFixed(2));

    let calculatedTotal =
      (billAmount * (1 + tipPercentage / 100)) / numberOfPeople;
    totalPerPerson.textContent = "";
    totalPerPerson.append("$ " + calculatedTotal.toFixed(2));
  } else if (zeroPattern.test(customTip) || tipPercentage == "undefined") {
    tipButtonReset();
    let calculatedTotal = billAmount / numberOfPeople;
    totalPerPerson.textContent = "";
    totalPerPerson.append("$ " + calculatedTotal.toFixed(2));
  } else {
    tipButtonReset();
    let calculatedTipPerPerson =
      (billAmount * (customTip / 100)) / numberOfPeople;
    tipPerPerson.textContent = "";
    tipPerPerson.append("$ " + calculatedTipPerPerson.toFixed(2));

    let calculatedTotal = (billAmount * (1 + customTip / 100)) / numberOfPeople;
    totalPerPerson.textContent = "";
    totalPerPerson.append("$ " + calculatedTotal.toFixed(2));
  }
}

// ===================
//     Page Reset
// ===================

function pageReset() {
  document.querySelector(".error-container-span").remove();
  document.querySelector("p").remove();
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
