const input = document.getElementById("input");
const output = document.getElementById("output");
const warning = document.getElementById("warning");
const alphabet = "abcdefghijklmnopqrstuvwxyz";

const caesar13 = () => {
  let arr = [];
  let inputValue = input.value;
  inputValue.toString();

  arr.push(...inputValue.split(""));

  const rotAlphabet = alphabet.toString().split("");
  let result = [];

  if (input.value === "") {
    output.style.padding = "0px";
    output.style.height = "0px";
    warning.style.opacity = 1;
  } else {
    warning.style.opacity = 0;
    output.style.padding = "20px";
    output.style.height = "60px";
    for (let i = 0; i < arr.length; i++) {
      if (/^[a-zA-Z]$/.test(arr[i])) {
        let isUpperCase = arr[i] === arr[i].toUpperCase();
        let currentIndex = rotAlphabet.indexOf(arr[i].toLowerCase());
        let newIndex = currentIndex + 13;
        if (newIndex > 25) {
          newIndex = (newIndex - 26) % 26;
          result.push(
            isUpperCase
              ? rotAlphabet[newIndex].toUpperCase()
              : rotAlphabet[newIndex]
          );
        } else {
          result.push(
            isUpperCase
              ? rotAlphabet[newIndex].toUpperCase()
              : rotAlphabet[newIndex]
          );
        }
      } else {
        result.push(arr[i]);
      }
    }
  }

  output.value = [...result].join("");
};

export default caesar13;
