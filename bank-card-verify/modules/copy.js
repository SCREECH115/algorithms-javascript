const convertedValue = document.getElementById("outputValue");

const copy = () => {
  navigator.clipboard.writeText(convertedValue.value);
};

export default copy;
