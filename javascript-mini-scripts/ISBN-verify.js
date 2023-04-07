/*
 * Introduction
 *------------
 * Books are identified by ISBN-10 numbers. These numbers usually contain hyphens, for example: 99921-58-10-7
 *
 * ISBN-10 consists of 9 digits (0 to 9) and one control character (number or X). The X check character represents the number 10.
 *
 * The verification algorithm is as follows:
 * (x1 * 10 + x2 * 9 + x3 * 8 + x4 * 7 + x5 * 6 + x6 * 5 + x7 * 4 + x8 * 3 + x9 * 2 + x10 * 1) % 11 == 0
 *
 *
 * Example:
 *Take ISBN: 85-359-0277-5
 * (8 * 10 + 5 * 9 + 3 * 8 + 5 * 7 + 9 * 6 + 0 * 5 + 2 * 4 + 7 * 3 + 7 * 2 + 5 * 1) % 11 == 0
 *Algorithm validates this ISBN-10
 *
 * Purpose of the task
 *------------
 * Based on the algorithm presented above, write a function that checks the ISBN given in the form of a string. The function should handle ISBNs with and without dashes.
 *
 */

function checkISBN(isbn) {
  isbn = isbn.split("-").join("").split("");

  const symbol = isbn.indexOf("X");
  if (symbol !== -1) isbn[symbol] = "10";

  let sumArr = [];
  for (let i = 10; i >= 1; i--) {
    sumArr.push(isbn[i - 1] * i);
  }

  let result = sumArr.reduce((acc, val) => acc + val, 0);

  return result % 11 === 0;
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

verify(checkISBN("85-359-0277-5"), true);
verify(checkISBN("3-04-013311-X"), true);
verify(checkISBN("8535902775"), true);
verify(checkISBN("99921-58-10-3"), false);
verify(checkISBN("9992158103"), false);
