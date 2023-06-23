let errorText = document.createElement("div");
function blankBill() {
  let billAmount = document.querySelector("#bill-amount-input").value;
  errorText.textContent = "";
  console.log(typeof billAmount);
  if (billAmount == 0) {
    errorText.textContent = "Can't be zero";
    errorText.style.color = "red";
    errorText.style.fontSize = "0.75rem";
    errorText.style.margin = 0;
    errorText.style.padding = 0;
    document.querySelector("#bill-amount span").appendChild(errorText);
  }
}

function pageReset() {
  document.querySelector("#bill-amount-input").value = "";
  errorText.remove();
  document.querySelector("#people-qty-input").value = "";
  document.querySelector("#calculated-tip").innerHTML = "$ 0.00";
  document.querySelector("#calculated-total").innerHTML = "$ 0.00";
  document.getElementsByName("tip-selection").checked = false;
}
