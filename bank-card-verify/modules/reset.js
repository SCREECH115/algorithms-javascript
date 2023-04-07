const cardValue = document.getElementById("inputValue");
const convertedValue = document.getElementById("outputValue");
const outputdiv = document.getElementById("outputValue");
const buttons = document.querySelector(".buttons");

const reset = () => {
  cardValue.value = "";
  convertedValue.value = "";
  outputdiv.style.backgroundColor = "rgba(30, 30, 30, 0.9)";
  outputdiv.style.color = "white";
  outputdiv.style.opacity = "0";
  outputdiv.style.height = "0";
  buttons.style.opacity = "0";
};

export default reset;
