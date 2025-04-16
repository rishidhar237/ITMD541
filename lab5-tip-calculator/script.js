const billInput = document.getElementById("billTotal");
const tipSlider = document.getElementById("tipSlider");
const tipPercent = document.getElementById("tipPercent");
const tipAmount = document.getElementById("tipAmount");
const totalWithTax = document.getElementById("totalWithTax");
const totalWithTipTax = document.getElementById("totalWithTipTax");
const errorMsg = document.getElementById("errorMsg");
const currencySelect = document.getElementById("currency");
const conversionRateDisplay = document.getElementById("conversionRateDisplay");
const convertedTip = document.getElementById("convertedTip");
const convertedTotal = document.getElementById("convertedTotal");

const rates = {
  inr: 85,
  eur: 0.95
};

document.getElementById("tipForm").addEventListener("input", calculateTip);
currencySelect.addEventListener("change", calculateTip);

function calculateTip() {
  const billValue = parseFloat(billInput.value);
  const tipValue = parseInt(tipSlider.value);
  tipPercent.textContent = tipValue + "%";

  if (isNaN(billValue) || billValue < 0) {
    errorMsg.textContent = "Please enter a valid positive number for the bill.";
    clearFields();
    return;
  } else {
    errorMsg.textContent = "";
  }

  const tax = billValue * 0.11;
  const totalTaxed = billValue + tax;
  totalWithTax.value = totalTaxed.toFixed(2);

  const tip = totalTaxed * (tipValue / 100);
  const grandTotal = totalTaxed + tip;

  tipAmount.value = tip.toFixed(2);
  totalWithTipTax.value = grandTotal.toFixed(2);

  const selected = currencySelect.value;
  let tipConverted = tip;
  let totalConverted = grandTotal;
  let rateLabel = "";

  if (selected === "usd") {
    tipConverted = tip.toFixed(2) + " USD";
    totalConverted = grandTotal.toFixed(2) + " USD";
    rateLabel = "1 USD = 1 USD";
  } else if (selected === "inr") {
    tipConverted = (tip * rates.inr).toFixed(2) + " ₹";
    totalConverted = (grandTotal * rates.inr).toFixed(2) + " ₹";
    rateLabel = "1 USD = 85 INR";
  } else if (selected === "eur") {
    tipConverted = (tip * rates.eur).toFixed(2) + " €";
    totalConverted = (grandTotal * rates.eur).toFixed(2) + " €";
    rateLabel = "1 USD = 0.95 EUR";
  }

  convertedTip.value = tipConverted;
  convertedTotal.value = totalConverted;
  conversionRateDisplay.textContent = rateLabel;
}

function clearFields() {
  tipPercent.textContent = "";
  tipAmount.value = "";
  totalWithTax.value = "";
  totalWithTipTax.value = "";
  convertedTip.value = "";
  convertedTotal.value = "";
  conversionRateDisplay.textContent = "";
}
