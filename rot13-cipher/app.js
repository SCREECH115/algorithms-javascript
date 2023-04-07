import caesar13 from "./modules/caesar13.js";
import reset from "./modules/reset.js";
import copy from "./modules/copy.js";

const btn = document.getElementById("btnGenerate");
const input = document.getElementById("input");
const resetBtn = document.querySelector(".reset-btn");
const copyBtn = document.querySelector(".copy-btn");

// Calculating ROT13
// btn.addEventListener("click", function () {
//   console.log(input.value.to);
// });

btn.addEventListener("click", caesar13);

// Reset form
resetBtn.addEventListener("click", reset);

// Copy encrypted value
copyBtn.addEventListener("click", copy);

//

