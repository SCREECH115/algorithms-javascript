const outputdiv = document.getElementById("outputValue");
const buttons = document.querySelector(".buttons");

const showButtons = () => {
  outputdiv.style.backgroundColor = "	#AAFF00";
  outputdiv.style.color = "black";
  outputdiv.style.opacity = "1";
  outputdiv.style.height = "100px";
  buttons.style.opacity = "1";
};

const hideButtons = () => {
  outputdiv.style.backgroundColor = "#FF4433";
  outputdiv.style.color = "black";
  outputdiv.style.opacity = "1";
  outputdiv.style.height = "100px";
};

export { showButtons, hideButtons };
