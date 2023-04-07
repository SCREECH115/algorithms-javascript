/*
 * Master JavaScript - Przeprogramowani.pl
 * I. Foundations of the JavaScript language
 *
 * Exercise 19 - "Match the brackets"
 */

/*
 * Purpose of the task
 *------------
 * When receiving a string containing square brackets [], braces {}, or parentheses (), make sure all of the pairs are matched and properly nested. If everything is correct, return true. If errors are detected, return false.
 *
 * Example: '[{()}]' => true
 * Example: '[{]}' => false
 */

const brackets = {
  "{": "}",
  "[": "]",
  "(": ")",
};

const openBracket = Object.keys(brackets);
const closeBracket = Object.values(brackets);

function checkBrackets(string) {
  let arr = [];

  for (let i = 0; i < string.length; i++) {
    let lastEl = arr[arr.length - 1];

    if (string[i] === "[" || string[i] === "{" || string[i] === "(") {
      arr.push(string[i]);
    } else if (
      (lastEl === "(" && string[i] === ")") ||
      (lastEl === "[" && string[i] === "]") ||
      (lastEl === "{" && string[i] === "}")
    ) {
      arr.pop();
    }
  }

  return arr.length ? false : true;
}

/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(checkBrackets("[{()}]"), true);
verify(checkBrackets("[{]}"), false);
verify(checkBrackets("()[{}]"), true);
verify(checkBrackets("{[(]}}"), false);
verify(checkBrackets("[{()]}"), false);
verify(checkBrackets("[]{})("), false);
verify(checkBrackets("()([{})]"), false);
