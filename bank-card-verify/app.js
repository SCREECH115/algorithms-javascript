import checkBank from "./modules/checkCardNumber.js";
import reset from "./modules/reset.js";
import copy from "./modules/copy.js";

const checkBtn = document.getElementById("checkButton");
const cardValue = document.getElementById("inputValue");
const convertedValue = document.getElementById("outputValue");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");

checkBtn.addEventListener("click", function () {
  convertedValue.value = checkBank(cardValue.value);
});

resetBtn.addEventListener("click", reset);
copyBtn.addEventListener("click", copy);
