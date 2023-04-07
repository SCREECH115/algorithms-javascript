const cardValue = document.getElementById("inputValue");

function formatCreditCardNumber() {
  let cardNumber = cardValue.value.replace(/\s/g, ""); // usuwa istniejące spacje

  // dodaje spację po każdych 4 cyfrach
  cardNumber = cardNumber.replace(/(\d{4})/g, "$1 ");

  cardValue.value = cardNumber;
}

export default formatCreditCardNumber;
