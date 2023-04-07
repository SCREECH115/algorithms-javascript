/*
 * Purpose of the task
 *------------
 * Implement a function that will "interleave" for the two given parameters
 * - using the next digits of the parameters will combine them into one string.
 *
 * Example:
 * zipIt(111, 222) // => '121212'
 * zipIt(123, 456) // => '142536'
 * zipIt(12, 5555) // => '152555'
 */

const zipIt = (first, second) => {
  if (typeof first !== "number" && typeof second !== "number") {
    throw new Error("Inputs must be a numbers!");
  }

  const firstNum = first.toString().split("");
  const secondNum = second.toString().split("");
  // const zipLength = firstNum.length + secondNum.length;

  const arr = [];

  for (let i = 0; i < firstNum.length || i < secondNum.length; i++) {
    arr.push(firstNum[i]);
    arr.push(secondNum[i]);
  }
  return arr.join("");
};

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(zipIt(111, 222), "121212");
verify(zipIt(123, 456), "142536");
verify(zipIt(12, 5555), "152555");
verify(zipIt(5555, 12), "515255");
