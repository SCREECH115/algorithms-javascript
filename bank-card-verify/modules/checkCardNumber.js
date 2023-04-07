import cards from "./cards.json" assert { type: "json" };
import luhnCheck from "./luhnCheck.js";
import formatCreditCardNumber from "./format-input.js";
import { showButtons, hideButtons } from "./manage-buttons.js";

const checkBank = (number) => {
  number = number.toString().split("");
  number = number.filter(function (str) {
    return /\S/.test(str);
  });

  const numberLen = number.length;

  for (let card in cards) {
    const cardLenths = cards[card].numberLength;
    const cardIndex = cards[card].startIndex;

    for (let i = 0; i < cardIndex.length; i++) {
      let start = number[0] + number[1];

      if (
        cardIndex[i] === parseInt(start) ||
        (cardIndex[i] === parseInt(number[0]) && luhnCheck(number.join("")))
      ) {
        if (cardLenths.includes(numberLen)) {
          formatCreditCardNumber();
          showButtons();
          return `Number is correct. Card issuer is ${card}.`;
        } else {
          formatCreditCardNumber();
          hideButtons();
          return `Invalid number`;
        }
      }
    }
  }
  hideButtons();
  return `Enter correct value please!`;
};

export default checkBank;
